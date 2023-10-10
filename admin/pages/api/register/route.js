import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function POST(req) {
    try {

        const { name, email, password } = await req.json();

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        if (!password) {
            return NextResponse.json({ message: "Password is required" }, { status: 400 });
        }

        if (!name) {
            return NextResponse.json({ message: "Name is required" }, { status: 400 });
        }

        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: "User with this email already exists" }, { status: 422 });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await connectMongoDB();
        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User Registered" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}