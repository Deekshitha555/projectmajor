import connectToDB from "../../../utils/connectTodb";
import User from "../../../models/Usermodel";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedData = loginSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors.map((err) => err.message).join(", ") },
        { status: 400 }
      );
    }

    const { email, password } = parsedData.data;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const isPasswordValid = await bcryptjs.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET!,
      { expiresIn: "10m" }
    );
    
    const serializedCookie = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 180, // 1 hour
      path: "/",
    });

    const { password: _, ...userWithoutPassword } = existingUser.toObject();

    return new NextResponse(
      JSON.stringify({
        message: "Login successful",
        success: true,
        user: userWithoutPassword,
      }),
      {
        headers: {
          "Set-Cookie": serializedCookie,
        },
      }
    );
  } catch (error) {
    console.error("Error during user login:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
