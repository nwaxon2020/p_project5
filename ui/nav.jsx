"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { useState } from "react"


export default function Nav(){
    //toggle side bar in mobile view
    const [togleSidebar, setTogleSidebar] = useState(true);
    const [toggle, setToggle] = useState(true)

    //session log in data
    const {data: session} = useSession()
    const profilePic = session?.user?.image
    const profileName = session?.user?.name
    
    //prevent nav bar from these routes  
    const path = usePathname()
    const routes = ["/login", "/policies", "/policies/data-deletion"].includes(path)
    if(routes){
        return(<></>)
    }

    return(
        <>

            <nav className="bg-[rgba(0,0,0,0.3)]">
                <div className="flex p-3 px-5 sm:px-10 flex-row justify-between items-end">
                    <div className="w-15 h-15 sm:w-20 sm:h-20 rounded-full overflow-hidden border-[goldenrod] border-4"><img src="./logo.jpg" alt="Logo" /></div>
                    {!togleSidebar && <>
                        <ul className="text-gray-200 font-bold flex gap-30">
                        <li className={`cursor-pointer ${path==="/"? "text-[goldenrod] hover:text-gray-400":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                            <Link className="w-full" href={"/"}>Home</Link>
                        </li>
                        <li className={`cursor-pointer ${path==="/videos"? "text-[goldenrod] hover:text-gray-400":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                            <Link  className="w-full"href={"/videos"}>videos</Link>
                        </li>
                        <li className={`cursor-pointer ${path==="/trending"? "text-[goldenrod] hover:text-gray-400":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                            <Link  className="w-full"href={"/trending"}>Trending</Link>
                        </li>
                        <li className={`cursor-pointer ${path==="/news"? "text-[goldenrod] hover:text-gray-400":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                            <Link  className="w-full"href={"/news"}>News</Link>
                        </li>
                        <li className={`cursor-pointer ${path==="/help"? "text-[goldenrod] hover:text-gray-400":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                            <Link  className="w-full"href={"/help"}>Help</Link>
                        </li>
                        </ul>
                        <div className="flex justify-center items-end gap-4">
                            <p className="text-gray-200 font-bold cursor-pointer hover:text-gray-400 transition ease-in-out duration-200" onClick={()=> signOut()}>Sign Out</p>
                            <div className="w-15 h-15 rounded-full overflow-hidden border-white border-2">
                                <img className="w-full" src={profilePic || "./profile.png"} alt="Profile Picture" />
                            </div>
                            <small className=" ml-[-1rem] text-[goldenrod]">{profileName}</small>
                        </div>
                        </>
                    }

                    {toggle ? <div className={`${!togleSidebar && "hidden"}`} onClick={()=> setToggle(false)}><i className="fa fa-bars text-[goldenrod]" style={{fontSize:"30px"}}></i></div> : <
                        div className={`${!togleSidebar && "hidden"}`} onClick={()=> setToggle(true)}><i className="fa fa-angle-double-down text-[goldenrod]" style={{fontSize:"30px"}}></i></div>
                    }

                </div><hr className="text-gray-200"/>

            </nav>

            {togleSidebar &&
                <div  className="w-full py-6 px-2 bg-[rgba(0,0,0,0.6)] text-gray-200 font-bold flex flex-col rounded-br-[10px]">

                    <div className="pl-5 flex flex-col justify-end items-start gap-4 mb-5">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-white border-2">
                            <img className="w-full" src={profilePic || "./profile.png"} alt="Profile Picture" />
                        </div>
                        <small className=" mt-[-1rem] text-[goldenrod]">{profileName}</small>
                    </div><hr />

                    <ul className="my-2">

                        <li className={`cursor-pointer ${path==="/"? "text-[goldenrod] hover:bg-gray-800":"hover:bg-gray-800"} transition ease-in-out duration-200`}>
                            <Link className="py-3 pl-5 block border-b-1 border-gray-600" href={"/"}>Home</Link>
                        </li>

                        <li className={`cursor-pointer ${path==="/videos"? "text-[goldenrod] hover:bg-gray-800" :"hover:bg-gray-800"} transition ease-in-out duration-200`}>
                            <Link className="py-3 pl-5 block border-b-1 border-gray-600" href={"/videos"}>videos</Link>
                        </li>

                        <li className={`cursor-pointer ${path==="/trending"? "text-[goldenrod] hover:bg-gray-800":"hover:bg-gray-800"} transition ease-in-out duration-200`}>
                            <Link className="py-3 pl-5 block border-b-1 border-gray-600" href={"/trending"}>Trending</Link>
                        </li>

                        <li className={`cursor-pointer ${path==="/news"? "text-[goldenrod] hover:bg-gray-800":"hover:bg-gray-800"} transition ease-in-out duration-200`}>
                            <Link className="py-3 pl-5 block border-b-1 border-gray-600" href={"/news"}>News</Link>
                        </li>

                        <li className={`mb-5 cursor-pointer ${path==="/help"? "text-[goldenrod] hover:bg-gray-800":"hover:bg-gray-800"} transition ease-in-out duration-200`}>
                            <Link className="py-3 pl-5 block" href={"/help"}>Help</Link>
                        </li><hr />

                        <li className=" pt-5 pb-3 pl-5 text-gray-200 font-bold cursor-pointer hover:bg-gray-800 transition ease-in-out duration-200" onClick={()=> signOut()}>Sign Out</li>
                    </ul>
                </div>
            }
        </>
    )
}
