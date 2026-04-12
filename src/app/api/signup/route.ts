import connectToDB from "../../../utils/connectTodb";
import User from "../../../models/Usermodel";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

const registerSchema = z.object({
  username: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedData = registerSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors.map((err) => err.message).join(", ") },
        { status: 400 }
      );
    }

    const { username, email, password } = parsedData.data;
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10);
    const salt = await bcryptjs.genSalt(saltRounds);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
   console.log(savedUser)
    const { password: _, ...userWithoutPassword } = savedUser.toObject();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
