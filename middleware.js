import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {

    const token = await getToken({req})
    const path = req.nextUrl.pathname;
    const routes = ["/", "/news",].includes(path)

    try {

        if(routes && !token){
            return NextResponse.redirect(new URL("/login", req.url))
        }

        return NextResponse.next()

    } catch (error) {
        NextResponse.json({error: "Problem With Server: ", error}, {status: 500})
    }
    
}