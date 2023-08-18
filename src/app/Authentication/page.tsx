import Navbar from "@/components/navbar/navbar";
import AuthModel from "@/components/models/authModel";

const Auth = () => {
    return (
        <div className=" bg-gradient-to-b from-gray-600 to-black h-screen relative">
            <div className="max-w-7xl mx-auto">
                <Navbar/>
            </div>
            <div className="flex items-center justify-center h[calc(100vh -5rem)] pointer-events-none select-none ">
                <img src="/hero.png" alt="hero image"/>
            </div>
            <AuthModel/>
        </div>
    )
};

export default Auth;