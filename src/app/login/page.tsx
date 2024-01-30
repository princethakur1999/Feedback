"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import Link from "next/link";


export default function Login() {



    const router = useRouter();



    const [disableButton, setDisableButton] = useState(true);

    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({ username: "", password: "" });


    function changeHandler(event: any) {

        const { name, value } = event.target;

        setUser((prev) => ({ ...prev, [name]: value }));
    }


    async function submitHandler(event: any) {

        event.preventDefault();

        try {

            setLoading(true);

            const response = await axios.post("/api/login", user);



            if (response.data.success === true) {

                router.push('/profile');

            } else {

                throw new Error('Login failed. Please check your credentials.');
            }

        } catch (e) {

            alert("Wrong credentials");
        }
        finally {

            setLoading(false);
        }
    }


    useEffect(() => {

        if (user.username.length > 0 && user.password.length > 0) {

            setDisableButton(false);

        } else {

            setDisableButton(true);
        }

    }, [user]);


    return (

        <div className="flex flex-col justify-around items-center gap-4 w-[30%] h-[75%] bg-slate-900 p-4 rounded-md">


            <h2 className="text-center text-white text-2xl p-2">{loading ? "Processing..." : "Login!"}</h2>


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
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={changeHandler}
                />

                <button className={`bg-green-500 text-white font-bold w-[100px] rounded-lg py-2 ${disableButton ? "cursor-not-allowed" : ""}`}>Login</button>

                <Link href="/signup" className="px-4 underline mt-4 text-white">Signup</Link>


            </form>
        </div>
    )
}
