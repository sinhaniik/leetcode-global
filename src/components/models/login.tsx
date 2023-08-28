"use client"

import {useSetRecoilState} from "recoil";
import {authModelStateRecoil} from "@/Atom/authModelAtom";
import {auth} from "@/firebase/firebase";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

const Login = () => {
    const authModel = useSetRecoilState(authModelStateRecoil)

    const [input, setInput] = useState({email: "", password: ""});
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const router = useRouter()

    const handleClick = (type: "register" | "login" | "forgotPassword") => {
        authModel((prev) => ({...prev, type: type}))
    }

    const handleChangeClick = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput((prev) => ({...prev, [e.target.name]: e.target.value}));
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.email || !input.password) return alert("cannot left an input field empty")

        try {
            const newUser = await signInWithEmailAndPassword(input.email, input.password)
            if (!newUser) return
            router.push("/")
        } catch (error: any) {
            alert(error.message)
        }
    };

    return <form action="" className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium text-white"> Log In into LeetCode-cl</h3>

        {/*// Email sign*/}
        <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2 text-grey-300"> Your Email </label>
            <input id="email" type="email" name="email" className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5
bg-gray-600 border-gray-500 placeholder-gray-400 Itext-white"
                   placeholder="nikhil@gmail.com" onChange={handleChangeClick} />
        </div>

        {/*// Password*/}
        <div>
            <label htmlFor="passwoed" className="text-sm font-medium block mb-2 text-grey-300">
                Your Password
            </label>
            <input id="password" type="password" name="password" className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 Itext-white"
                   placeholder="********"  onChange={handleChangeClick} />
        </div>

        {/*login*/}
        <button type="submit" className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm p-3 py-2-5 text-center bg-brand-orange hover bg-brand-orange-s
        ">
            {loading? "logging in...": "login"}
        </button>

        {/*Forgot password*/}
        <button className="flex w-full justify-end" onClick={() => handleClick("forgotPassword")}>
            <a href="#" className="text-sm block text-brand-orange hover:underline w-full text-right">
                Forgot Password
            </a>
        </button>

        <div className="text-sm font-medium text-grey-300">
            Not Registered?{" "}
            <a href="#" className="text-blue-700 hover:underline" onClick={() => handleClick("register")}>
                Create account
            </a>
        </div>
    </form>;
};

export default Login;