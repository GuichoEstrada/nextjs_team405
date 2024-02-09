import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const {email, password} = await request.json();
    await connect();

    // Check if email already exists
    const existingUser = await User.findOne({email});
    if(existingUser) {
        return new NextResponse("Email already exists.", {status:400});
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 5);

    // Create new user object to send to database
    const newUser = new User({
        email,
        password:hashedPassword,
    })

    try {

        await newUser.save();
        return new NextResponse("Registration successful!", {status:200})

    } catch (err: any) {

        return new NextResponse(err, {
            status:500,
        })
    }
}