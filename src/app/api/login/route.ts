import { NextRequest, NextResponse } from "next/server";

import User from "@/models/user";

import bcryptjs from 'bcryptjs';

import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

const { config } = dotenv;

config();


import { connect } from '@/config/db';

connect();


export async function POST(request: NextRequest) {


    try {

        const reqBody = await request.json();

        console.log("reqBody: ", reqBody);

        const { username, password } = reqBody;

        const user = await User.findOne({ username });

        if (!user) {

            return NextResponse.json({

                success: false,
                status: 401,
                message: `User not found`,

            })
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if (!isPasswordValid) {

            return NextResponse.json({

                success: false,
                status: 403,
                message: `Invalid Password`
            })
        }

        // payload
        const tokenPayload = {

            id: user._id,
            username: user.username,
            email: user.email
        };

        // Generate JWT Token
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!, { expiresIn: "1d" })


        const response = NextResponse.json({

            success: true,
            message: "Login successful"
        });

        response.cookies.set('token', token, { httpOnly: true });

        return response;


    } catch (e) {

        console.log("Error in login", e);

        return NextResponse.json({
            success: false,
            status: 500,
            message: 'Internal Server Error'
        })
    }
}