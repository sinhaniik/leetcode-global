"use client"
import React from 'react';
import NewNav from "@/components/playground/newNav/newNav";
import Split from "react-split"
import CodeMirror from '@uiw/react-codemirror';
import {darcula} from "@uiw/codemirror-theme-darcula";
import {javascript} from "@codemirror/lang-javascript";

type Props = {};
const PlayGround = (props: Props) => {
    return (
        <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
            <NewNav/>
            <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[70, 30]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value="const a = 1;"
                        theme={darcula}
                        extensions={[javascript()]}
                        style={{fontSize: 16}}
                    />
                </div>
                <div> test cases</div>
            </Split>
        </div>
    );
};

export default PlayGround