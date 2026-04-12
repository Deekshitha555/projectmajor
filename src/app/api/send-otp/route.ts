import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // TEMP STORE (in-memory)
  const g: any = globalThis;   // <-- Fix
  g.tempOTPStore = g.tempOTPStore || {};

  g.tempOTPStore[email] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  };

  // Mail transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}`,
  });

  return NextResponse.json({ message: "OTP sent successfully" });
}
