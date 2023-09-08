"use client"

import React from 'react';
import Link from "next/link";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebase";
import Logout from "@/components/button/logout";
import Image from "next/image";

const Topbar = () => {
		const [user] = useAuthState(auth)

	return (
		<nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
			<div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
				<Link href="/" className="h-[22px] flex-1">
					<Image src="/logo-full.png" alt="Logo" height={200} width={100} />
				</Link>

				<div className="flex items-center space-x-4 flex-1 justify-end">
					<div>
						<a
							href="https://www.buymeacoffee.com/burakorkmezz"
							target="_blank"
							rel="noreferrer"
							className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
						>
							Premium
						</a>
					</div>
					{!user && (
						<Link href="/Authentication">
							<button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">Sign In</button>
						</Link>
					)}
					{user && (
						<div className="cursor-pointer group relative">
							<Image src="/avatar.png" alt="user avatar" height={200} width={200}/>

							<div className="absolute top-8 left-2/4 -translate-x-3/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40
							group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
								<p className="text-sm">{user.email}</p>
							</div>
						</div>
					)}
				</div>
				{user && (
					<Logout/>
				)}
			</div>
		</nav>
	);
};

export default Topbar