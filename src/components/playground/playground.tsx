import React from 'react';
import NewNav from "@/components/playground/newNav/newNav";

type Props = {};
const PlayGround = (props: Props) => {
    return (
        <div className="flex justify-between ">
            <>
                <NewNav />
            </>
        </div>
    );
};

export default PlayGround