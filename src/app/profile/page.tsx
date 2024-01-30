"use client";

import axios from "axios";

import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Profile() {

    const router = useRouter();

    const logout = async () => {

        try {

            await axios.get('/api/logout');

            router.push('/login');

            alert("Logout successfull");

        } catch (e) {

            console.error(e);
        }
    }

    return (

        <div className="h-[100%] w-[100%] flex flex-col justify-center items-center bg-green-500 relative">

            <button className="px-4 bg-white text-black border-none w-[100px] text-center absolute top-4 right-4" onClick={logout}>Logout</button>


            <div>
                <Link href="/syllabus" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Feedback on Syllabus</Link>
            </div>

        </div>
    )
}
