import { NextResponse } from "next/server";


export async function GET() {

    try {

        const response = NextResponse.json({
            success: true,
            message: "Logout successful"
        });

        response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });

        return response;

    } catch (e) {

        console.log(e);

        return NextResponse.json({

            success: false,
            message: "Logout failed"
        })

    }
}