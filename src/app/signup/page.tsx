"use client";

import axios from "axios";

import { useState, useEffect } from "react";

import { useRouter } from 'next/navigation';

import Link from "next/link";



export default function Signup() {

    const router = useRouter();



    const [disableButton, setDisableButton] = useState(true);

    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({ username: "", email: "", password: "" });


    function changeHandler(event: any) {

        const { name, value } = event.target;

        setUser((prev) => ({ ...prev, [name]: value }));
    }


    async function submitHandler(event: any) {

        event.preventDefault();

        try {

            setLoading(true);

            const response = await axios.post("/api/signup", user);

            if (response.data.success === true) {

                router.push('/login');
            }

        } catch (e) {

            alert("Failed to sign up");
        }
        finally {

            setLoading(false);
        }
    }


    useEffect(() => {

        if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {

            setDisableButton(false);

        } else {

            setDisableButton(true);
        }

    }, [user]);

    return (

        <div className="flex flex-col justify-around items-center gap-4 w-[30%] h-[75%] bg-slate-900 p-4 rounded-md">

            <h2 className="text-center text-white text-2xl p-2">{loading ? "Processing..." : "Signup!"}</h2>

            <form onSubmit={submitHandler} className="flex flex-col justify-center items-center gap-4 h-[60%] w-[80%]">

                <input
                    className="p-2 outline-none rounded-md"
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={user.username}
                    onChange={changeHandler}
                />
                <input
                    className="p-2 outline-none rounded-md"
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={changeHandler}
                />

                <input
                    className="p-2 outline-none rounded-md"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={changeHandler}
                />

                <button className={`bg-green-500 text-white font-bold w-[100px] rounded-lg py-2 ${disableButton ? "cursor-not-allowed" : ""}`}>Signup</button>

                <Link href="/login" className="px-4 underline mt-4 text-white">Login</Link>


            </form>
        </div>
    )
}
