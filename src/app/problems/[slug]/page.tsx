// @flow
import  React from 'react';
import Topbar from "@/components/Topbar/topbar";

type Props = {

};
const Page = (props: Props) => {
    return (
        <div>
            <Topbar problemPage={true} />
            <h1>hello from slug </h1>
        </div>
    );
};

export default Page