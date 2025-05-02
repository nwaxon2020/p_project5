"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"


export default function Nav(){

    const {data: session} = useSession()

    const profilePic = session?.user?.image
    const profileName = session?.user?.name
    
    const path = usePathname()
    const routes = ["/login"].includes(path)
    if(routes){
        return(<></>)
    }

    return(
        <nav className="bg-[rgba(0,0,0,0.3)]">
            <div className="flex p-3 px-10 flex-row justify-between items-end">
                <div className="w-20 h-20 rounded-full overflow-hidden border-[goldenrod] border-4"><img src="./logo.jpg" alt="Logo" /></div>
                <ul className="text-gray-200 font-bold flex gap-40">
                    <li className={`cursor-pointer ${path==="/"? "text-[goldenrod]":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={`cursor-pointer ${path==="/about"? "text-[goldenrod]":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className={`cursor-pointer ${path==="/news"? "text-[goldenrod]":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                        <Link href={"/news"}>News</Link>
                    </li>
                    <li className={`cursor-pointer ${path==="/contact"? "text-[goldenrod]":"hover:text-gray-400"} transition ease-in-out duration-200`}>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <div className="flex justify-center items-end gap-4">
                    <p className="text-gray-200 font-bold cursor-pointer hover:text-gray-400 transition ease-in-out duration-200" onClick={()=> signOut()}>Sign Out</p>
                    <div className="w-15 h-15 rounded-full overflow-hidden border-white border-2">
                        <img className="w-full" src={profilePic || "./profile.png"} alt="Profile Picture" />
                    </div>
                    <small className=" ml-[-1rem] text-[goldenrod]">{profileName}</small>
                </div>

            </div><hr className="text-gray-200"/>

        </nav>
    )
}
