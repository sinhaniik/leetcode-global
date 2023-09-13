import  React from 'react';
import Topbar from "@/components/Topbar/topbar";
import WorkSpace from '@/components/workspace/workspace';

type Props = {};
const Page = (props: Props) => {
    console.log("problem in Page ")
    return (
        <div>
            <Topbar problemPage={true} />
            <WorkSpace />
      </div>
    );
};

export default Page
