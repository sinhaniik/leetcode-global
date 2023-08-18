const Login = () => {
    return <form action="" className="space-y-6 px-6 pb-4">
        <h3 className="text-xl font-medium text-white"> SignIn into LeetCode</h3>

        {/*// Email sign*/}
        <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2 text-grey-300"> Your Email </label>
            <input id="email" type="email" name="email" className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5
bg-gray-600 border-gray-500 placeholder-gray-400 Itext-white"
                   placeholder="nikhil@gmail.com"/>
        </div>

        {/*// Password*/}
        <div>
            <label htmlFor="passwoed" className="text-sm font-medium block mb-2 text-grey-300">
                Your Password
            </label>
            <input id="password" type="password" name="password" className="border-2 outline-none sm:text-sm rounded-1g focus:ring-blue-500 focus: border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 Itext-white"
                   placeholder="********"/>
        </div>

        <button type="submit" className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2-5 text-center bg-brand-orange hover bg-brand-orange-s
        ">
            Login
        </button>

        <button className="flex w-full justify-end">
            <a href="#" className="text-sm block text-brand-orange hover:underline w-full text-right">
                Forgot Password
            </a>
        </button>

        <div className="text-sm font-medium text-grey-300">
            Not Registered?{" "}
            <a href="#" className="text-blue-700 hover:underline">
                Create account
            </a>
        </div>
    </form>;
};

export default Login;