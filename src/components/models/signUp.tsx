"use client"

import React, {useEffect, useState} from 'react';
import {useSetRecoilState} from "recoil";
import {authModelStateRecoil} from "@/Atom/authModelAtom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import {auth} from "@/firebase/firebase"
import {useRouter} from "next/navigation";

export const SignUp = () => {
    const authModel = useSetRecoilState(authModelStateRecoil)
    const [input, setInput] = useState({email: "", name: "", password: ""})

    //user auth
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const router = useRouter()

    const handleClick = () => {
        authModel((prev) => ({...prev, type: "login"}))
    }

    // If e.target.name is 'firstName' and e.target.value is 'John', it will add/overwrite the 'firstName' property in our state object with the value 'John'. This is commonly used in forms with multiple input elements to manage their state in a consolidated manner
    const handleClickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.email || !input.name || !input.password) return alert("cannot left an input field empty")
        try {
            const newUser = await createUserWithEmailAndPassword(input.email, input.password)
            if (!newUser) return;
            router.push("/")
        } catch (e: any) {
            alert(e.message)
        }
    };

    // error handling (if one use try to register again with same credentials)
    useEffect(() => {
        if (error) {
            alert(error.message)
        }
    }, [error]);

    return <form action="" className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
        <h3 className="text-xl font-medium text-white"> Register to LeetCode</h3>

        {/*Email sign*/}
        <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2 text-white"> Your Email </label>
            <input id="email" type="email" name="email"
                   className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                   placeholder="nikhil@gmail.com" onChange={handleClickInput}/>
        </div>

        {/*Name  */}
        <div>
            <label htmlFor="name" className="text-sm font-medium block mb-2 text-white">
                Your Name
            </label>
            <input id="name" type="text" name="name"
                   className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                   placeholder="Your Name" onChange={handleClickInput}/>
        </div>

        {/* Password*/}
        <div>
            <label htmlFor="passwoed" className="text-sm font-medium block mb-2 text-white">
                Your Password
            </label>
            <input id="password" type="password" name="password"
                   className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                   placeholder="********" onChange={handleClickInput}/>
        </div>


        <button type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s">
            {loading ? "Registering..." : "Register"}
        </button>


        <div className="text-sm font-medium text-gray-300 mb-5">
            Already have an account?{" "}
            <a href="#" className="text-brand-orange hover:text-brand-orange-s hover:underline"
               onClick={handleClick}>
                Login
            </a>
        </div>


    </form>;
};