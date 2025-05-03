"use client"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Nav() {
    //toggle nav bar for mobile view
    const [toggle, setToggle] = useState(false)

    //session data
    const { data: session } = useSession()
    const profilePic = session?.user?.image
    const profileName = session?.user?.name

    //dont show nav in these routes
    const path = usePathname()
    const hideNav = ["/login", "/policies", "/policies/data-deletion"]
    if (hideNav.includes(path)) return null

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className="bg-[rgba(0,0,0,0.3)]">
                <div className="flex p-3 px-5 md:px-10 justify-between items-end">
                    
                    {/* Logo */}
                    <div className="w-15 h-15 md:w-20 md:h-20 rounded-full overflow-hidden border-[goldenrod] border-4">
                        <img src="./logo.jpg" alt="Logo" />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex text-gray-200 font-bold gap-25">
                        <li className={`cursor-pointer ${path === "/" ? "text-[goldenrod]" : "hover:text-gray-400"} transition`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/videos" ? "text-[goldenrod]" : "hover:text-gray-400"} transition`}>
                            <Link href="/videos">Videos</Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/trending" ? "text-[goldenrod]" : "hover:text-gray-400"} transition`}>
                            <Link href="/trending">Trending</Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/news" ? "text-[goldenrod]" : "hover:text-gray-400"} transition`}>
                            <Link href="/news">News</Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/help" ? "text-[goldenrod]" : "hover:text-gray-400"} transition`}>
                            <Link href="/help">Help</Link>
                        </li>
                    </ul>

                    {/* Desktop Profile & Sign Out */}
                    <div className="hidden md:flex items-end gap-4">
                        <p onClick={() => signOut()} className="text-gray-200 font-bold cursor-pointer hover:text-gray-400 transition">
                            Sign Out
                        </p>
                        <div className="w-15 h-15 rounded-full overflow-hidden border-white border-2">
                            <img src={profilePic || "./profile.png"} alt="Profile" />
                        </div>
                        <small className="text-[goldenrod]">{profileName}</small>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        {toggle ? (
                            <i className="fa fa-angle-double-down text-[goldenrod]" style={{ fontSize: "30px" }}></i>
                        ) : (
                            <i className="fa fa-bars text-[goldenrod]" style={{ fontSize: "30px" }}></i>
                        )}
                    </div>
                </div>
                <hr className="text-gray-200" />
            </nav>

            {/* Mobile Slider Menu */}
            {toggle && (
                <div className="md:hidden slider-nav w-full py-6 px-2 bg-[rgba(0,0,0,0.6)] text-gray-200 font-bold flex flex-col rounded-br-[10px]">
                    
                    {/* Profile Section */}
                    <div className="pl-5 flex flex-col justify-start items-start gap-4 mb-5">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-white border-2">
                            <img src={profilePic || "./profile.png"} alt="Profile" />
                        </div>
                        <small className="text-[goldenrod] mt-[-1rem] font-[cursive]">{profileName}</small>
                    </div>
                    <hr />

                    {/* Menu Links (one by one) */}
                    <ul className="my-2 w-full">
                        <li className={`cursor-pointer ${path === "/" ? "text-[goldenrod]" : ""} hover:bg-gray-800 transition`}>
                            <Link onClick={()=> setToggle(false)} className="block py-3 pl-5 border-b border-gray-600" href="/">
                                Home
                            </Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/videos" ? "text-[goldenrod]" : ""} hover:bg-gray-800 transition`}>
                            <Link onClick={()=> setToggle(false)} className="block py-3 pl-5 border-b border-gray-600" href="/videos">
                                Videos
                            </Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/trending" ? "text-[goldenrod]" : ""} hover:bg-gray-800 transition`}>
                            <Link onClick={()=> setToggle(false)} className="block py-3 pl-5 border-b border-gray-600" href="/trending">
                                Trending
                            </Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/news" ? "text-[goldenrod]" : ""} hover:bg-gray-800 transition`}>
                            <Link onClick={()=> setToggle(false)} className="block py-3 pl-5 border-b border-gray-600" href="/news">
                                News
                            </Link>
                        </li>
                        <li className={`cursor-pointer ${path === "/help" ? "text-[goldenrod]" : ""} hover:bg-gray-800 transition`}>
                            <Link onClick={()=> setToggle(false)} className="block py-3 pl-5" href="/help">
                                Help
                            </Link>
                        </li>
                    </ul>

                    <hr />
                    
                    {/* Sign Out */}
                    <p
                        onClick={() => signOut()}
                        className="pt-5 pb-3 pl-5 text-gray-200 font-bold cursor-pointer hover:bg-gray-800 transition"
                    >
                        Sign Out
                    </p>
                </div>
            )}
        </>
    )
}
