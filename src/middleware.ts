import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken && request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("User is not logged in, redirecting to login page");
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
