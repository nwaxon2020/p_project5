"use client"
import {signIn} from "next-auth/react"
import { useState } from "react"

export default function LoginUi(){

    const [loading, setLoading] = useState(false);

    return(
        <div className="text-gray-200">
            <h1>Welcome to log In...................</h1>

                <div className="w-[90%] max-w-120 rounded-2xl bg-[rgba(0,0,0,0.3)] p-8 mx-auto my-30 flex flex-col border-1 border-gray-400">
                    {loading ? <>
                        <div className="mx-auto my-12 w-24 h-24 rounded-full border-gray-300 border-l-3 border-r-3 animate-spin"></div>
                        <small className="mx-auto">Please Wait...</small> 
                    </>: 
                    <>
                        <h2 className="text-[1.2rem] lg:text-[1.5rem] font-bold mb-10">Log In</h2>
                        <button className="mx-auto mb-8 bg-gray-200 text-[1.2rem] md:text-[1.5rem] font-bold hover:bg-blue-300 transition ease-in-out duration-200 text-black p-3 w-[65%] rounded-[1rem]"
                            onClick={async()=> (setLoading(true), await signIn("google", {callbackUrl:"/"}))}
                        >
                            <i className="fa fa-google text-red-600 mx-auto"></i>oogle
                        </button>
                        <button className="mx-auto mb-6 bg-gray-200 text-[1.2rem] md:text-[1.5rem] font-bold hover:bg-blue-300 transition ease-in-out duration-200 text-black p-3 w-[65%] rounded-[1rem]">
                        <i className="fa fa-facebook text-blue-700 mx-auto"></i>aceBook
                        </button>
                    
                    </>}
            </div>
            
        </div>
    )
}