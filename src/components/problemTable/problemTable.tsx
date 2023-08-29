'use client'
import React, {useState} from 'react';
import { BsCheckCircle } from "react-icons/bs";
import {problems} from "@/components/testData/testData";
import Link from "next/link";
import {AiFillYoutube} from "react-icons/ai";
import YouTube from "react-youtube";
import {IoClose} from "react-icons/io5";

const ProblemTable = () => {

    const [youtubePlayer, setYoutubePlayer] = useState({
        isOpen: false,
        videoId: ''
    })

    const handleYoutubeClose = () => {
        setYoutubePlayer({isOpen: false, videoId: ''})
    };

    return (
        <>
            <tbody className="text-white">
            {problems.map((doc, id: number) => {
                const difficultyColor = doc.difficulty === "Easy" ? "text-color-green-s" : doc.difficulty === "Hard" ? "text-dark-yellow" : "text-dark-pink"
                return (
                    <tr className={`${id % 2 == 1 ? "bg-dark-layer-1" : ""}`} key={doc.id}>
                        <th className="px-4 py-4 font-medium whitespace-nowrap text-dark-green-s">
                            <BsCheckCircle fontSize={"18"} width={"18"}/>
                        </th>
                        <td className="px-6 py-6">
                            <Link className="hover:text-blue-500 cursor-pointer" href={`/problems/${doc.id}`}>
                                {doc.title}
                            </Link>
                        </td>

                        <td className={`px-6 py-4 ${difficultyColor} `}>{doc.difficulty}</td>
                        <td className={'py-6 px-6'}>{doc.category}</td>
                        <td className={"py-6 py-4"}>
                            {doc.videoId ? (
                                <AiFillYoutube fontSize={'18'} className="cursor-pointer hover:text-red-600"
                                               onClick={() => setYoutubePlayer({
                                                   isOpen: true,
                                                   videoId: doc.videoId as string
                                               })}/>
                            ) : (
                                <p className="text-grey-400">coming soon</p>
                            )}
                        </td>
                    </tr>
                );
            })}
            </tbody>
            {youtubePlayer.isOpen && (
                <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
                <div className="w-full z-50 h-full px-6 relative max-w-4xl">
                    <div className="w-full h-full flex items-center justify-center relative ">
                        <div className="w-full relative">
                            <IoClose fontSize={"35"} className="cursor-pointer absolute -top-16 right-0" onClick={handleYoutubeClose}/>
                            <YouTube videoId={youtubePlayer.videoId} loading="lazy" iframeClassName="w-full min-h-[500px]"/>
                        </div>
                    </div>
                </div>
                </tfoot>
            )}
        </>
    );
};
export default ProblemTable