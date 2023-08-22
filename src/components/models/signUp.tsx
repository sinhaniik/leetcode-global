"use client"

import React from 'react';
import {useSetRecoilState} from "recoil";
import {authModelStateRecoil} from "@/Atom/authModelAtom";

export const SignUp = () => {
    const authModel = useSetRecoilState(authModelStateRecoil)

    const handleClick = () => {
        authModel((prev) => ({...prev, type: "login"}))
    }

    return <form action="" className="space-y-6 px-6 pb-4">
        <h3 className="text-xl font-medium text-white"> Register to LeetCode</h3>

        {/*Email sign*/}
        <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2 text-white"> Your Email </label>
            <input id="email" type="email" name="email"
                   className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                   placeholder="nikhil@gmail.com"/>
        </div>

        {/*Name  */}
        <div>
            <label htmlFor="name" className="text-sm font-medium block mb-2 text-white">
                Your Name
            </label>
            <input id="name" type="text" name="name"
                   className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                   placeholder="Your Name"/>
        </div>

        {/* Password*/}
        <div>
            <label htmlFor="passwoed" className="text-sm font-medium block mb-2 text-white">
                Your Password
            </label>
            <input id="password" type="password" name="password"
                   className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                   placeholder="********"/>
        </div>


        <button type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s ">
            Create Account
        </button>


        <div className="text-sm font-medium text-gray-300 mb-5">
            Already have an account?{" "}
            <a href="#" className="text-brand-orange hover:text-brand-orange-s hover:underline" onClick={handleClick}>
                Login
            </a>
        </div>


    </form>;
};