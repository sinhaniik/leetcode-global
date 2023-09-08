"use client"
import Navbar from "@/components/navbar/navbar";
import AuthModel from "@/components/models/authModel";
import {useRecoilValue} from "recoil";
import {authModelStateRecoil} from "@/Atom/authModelAtom";
import Image from "next/image";

const Auth = () => {
    const authModel = useRecoilValue(authModelStateRecoil)

    return (
        <div className=" bg-gradient-to-b from-gray-600 to-black h-screen relative">
            <div className="max-w-7xl mx-auto">
                <Navbar/>
            </div>
            <div className="flex items-center justify-center h[calc(100vh -5rem)] pointer-events-none select-none ">
                <Image src="/hero.png" alt="hero image" height={600} width={500}/>
            </div>
            {authModel.isOpen && <AuthModel/>}
        </div>
    );
};

export default Auth;