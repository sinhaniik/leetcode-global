import Link from "next/link";
import {useSetRecoilState} from "recoil";
import {authModelStateRecoil} from "@/Atom/authModelAtom";
import Image from "next/image";

const Navbar = () => {
    const setAuth = useSetRecoilState(authModelStateRecoil)
    const handleClick = () => {
        setAuth((prev) => ({...prev, isOpen: true, type: "login"}));
    };
    return (
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-22">
            <Link href="/" className="flex items-center justify-center h-20">
                <Image src="/logo.png" alt="leetcode" height={200} width={200}/>
            </Link>
            <div className="flex items-center">
                <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out" onClick={handleClick}>
                    Log In
                </button>
            </div>
        </div>
    )
};

export default Navbar;