"use client"
import React from 'react';
import NewNav from "@/components/playground/newNav/newNav";
import Split from "react-split"
import CodeMirror from '@uiw/react-codemirror';
import {darcula} from "@uiw/codemirror-theme-darcula";
import {javascript} from "@codemirror/lang-javascript";
import EditorFooter from "@/components/editorFooter/EditorFooter";

type Props = {};
const PlayGround = (props: Props) => {
    return (
        <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
            <NewNav/>

            {/*The Editor*/}
            <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[70, 30]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value="const a = 1;"
                        theme={darcula}
                        extensions={[javascript()]}
                        style={{fontSize: 16}}
                    />
                </div>

                {/*The test cases section*/}
                <div className="w-fu11 px-5 overflow-auto">

                    {/*Test Section heading*/}
                    <div className="flex- h-10 items-center space-x-6">
                        <div className="relative flex h-full flex-col justify-center cursor-pointer">
                            <div className="text-sm font-medium leading-5 text-white">Testcases</div>
                            <hr className="absolute bottom-0 h-0.5 w-20 rounded-full border-none bg-white"/>
                        </div>
                    </div>

                    <div className="flex">
                        {/*testcase1*/}
                        <div className="mr-2 items-start mt-2 text-white">
                            <div className="flex flex-wrap items-center gap-y-4">
                                <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                                hover:bg-dark-fill-2 relative rounded-lg px-2 py-1 cursor-pointer whitespace-nowrap">
                                    Case 1
                                </div>
                            </div>
                        </div>
                        <div className="mr-2 items-start mt-2 text-white">
                            <div className="flex flex-wrap items-center gap-y-4">
                                <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                                hover:bg-dark-fill-2 relative rounded-lg px-2 py-1 cursor-pointer whitespace-nowrap">
                                    Case 2
                                </div>
                            </div>
                        </div>
                        <div className="mr-2 items-start mt-2 text-white">
                            <div className="flex flex-wrap items-center gap-y-4">
                                <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                                hover:bg-dark-fill-2 relative rounded-lg px-2 py-1 cursor-pointer whitespace-nowrap">
                                    Case 3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="font-semibold my-5">
                        <p className="text-sm font-medium mt-4 text-white">Input: </p>
                        <div className="w-full cursor-text rounded-lg border px-2 py-[10px]
                        bg-dark-fill-3 border-transparent text-white mt-2 ">
                            nums : [2,7,11,15] , target: 9
                        </div>
                        <p className="text-sm font-medium mt-4 text-white">Input: </p>
                        <div className="w-full cursor-text rounded-lg border px-2 py-[10px]
                        bg-dark-fill-3 border-transparent text-white mt-2 ">
                            [0,1]
                        </div>
                    </div>
                </div>
            </Split>

            <EditorFooter />
        </div>
    );
};

export default PlayGround