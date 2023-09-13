'use client'

import React from 'react';
import Split from "react-split"
import ProblemStatement from "@/components/problemStatement/problemStatement";
import PlayGround from "@/components/playground/playground";

type Props = {};
const Workspace = (props: Props) => {
    return (
        <Split className="split" minSize={0}>
            <ProblemStatement/>
            <PlayGround />
        </Split>
    );
};

export default Workspace