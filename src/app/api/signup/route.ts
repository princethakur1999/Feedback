
import { NextRequest, NextResponse } from "next/server";

import User from "@/models/user";

import bcryptjs from "bcryptjs";

import { connect } from "@/config/db";

connect();


export async function POST(request: NextRequest) {

    try {

        const reqBody = await request.json();

        const { username, email, password }: any = reqBody;

        console.log("Request Body:", reqBody);


        // check if user already exist

        const user = await User.findOne({ email });

        if (user) {

            console.log(`User with the email ${email} is already registered.`);


            return NextResponse.json({
                success: false,
                message: `User with the email ${email} is already registered.`
            });
        }




        // hash password and save
        const salt = await bcryptjs.genSalt(10);

        const hashedPassword = await bcryptjs.hash(password, salt);

        console.log("Hashed Password: ", hashedPassword);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        console.log("SavedUse: ", savedUser);


        return NextResponse.json({
            success: true,
            message: "Account has been created successfully."
        })


    } catch (e: any) {

        console.log("Error in signup route: ", e);

        return NextResponse.json({
            success: false,
            message: e.message
        })
    }
}