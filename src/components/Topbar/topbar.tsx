"use client"

import React from 'react';
import Link from "next/link";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebase";
import Logout from "@/components/button/logout";
import Image from "next/image";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {BsList} from "react-icons/bs";
import Timer from "@/components/Timer/timer";

type TopbarProps = {
	problemPage?: boolean
};

const Topbar = ({problemPage}: TopbarProps) => {
	const [user] = useAuthState(auth)

	return (
		<nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto": ""}`}>
				<Link href="/" className="h-[22px] flex-1">
					<Image src="/logo-full.png" alt="Logo" height={200} width={100}/>
				</Link>

				{/*if there is a problempage = true then show this element */}
				{problemPage && (
					<div className="flex items-center gap-4 flex-1 justify-center">
						<div
							className="flex item-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor pointer pt-1.5 ">
							<FaChevronLeft/>
						</div>

						<Link href={"/"}
							  className="flex item-center gap-2 font-medium max-w-[170px] text-dark-grey-8 cursor-pointer">
							<div className="flex item-center">
								<BsList className="mt-1"/>
								<p className={"ml-1.5"}>Problem List</p>
							</div>
						</Link>

						<div
							className="flex item-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor pointer pt-1.5 ">
							<FaChevronRight/>
						</div>
					</div>
				)}

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
					{problemPage && (
						<Timer />
					)}

					{!user && (
						<Link href="/Authentication">
							<button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">Sign In</button>
						</Link>
					)}

					{user && (
						<div className="cursor-pointer group relative">
							<Image src="/avatar.png" alt="user avatar" height={30} width={30}/>

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