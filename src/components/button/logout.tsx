import  React from 'react';
import {FiLogOut} from "react-icons/fi";
import {useSetRecoilState} from "recoil";
import {authModelStateRecoil} from "@/Atom/authModelAtom";
import {useSignOut} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebase";

const Logout = () => {
    const [signOut, loading, error] = useSignOut(auth);

    const authModel = useSetRecoilState(authModelStateRecoil)
    const handleLogOut = () => {
        signOut();
    }

    return (
        <button className="bg-dark-fill-3 ml-1.5 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
                onClick={handleLogOut}>
            <FiLogOut/>
        </button>
    );
};

export default Logout
