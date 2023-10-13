import { NextResponse } from "next/server";

export function middleware(req) {
    //console.log(req.nextUrl.pathname)
    if(req.nextUrl.pathname === "/admin"){
        return NextResponse.next()
    }

    if (!req.cookies.has('admin')) {
        const baseUrl = req.nextUrl.origin; // Get the base URL
        const redirectUrl = new URL('/admin', baseUrl); // Create a URL with a relative path
        return NextResponse.redirect(redirectUrl.toString()); // Redirect to the new URL
    }

    return NextResponse.next()

}


export const config = {
    matcher: ['/admin/:path*']
}

