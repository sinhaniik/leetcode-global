'use client'

import React from 'react';
import Split from "react-split"
import ProblemStatement from "@/components/problemStatement/problemStatement";

type Props = {};
const Workspace = (props: Props) => {
    return (
        <Split className="split" minSize={0}>
            <ProblemStatement/>
            <div>editor</div>
        </Split>
    );
};

export default Workspace