import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const protectedRoutes = ["/dashboard", "/starwars/query"];
  const publicOnlyRoutes = ["/login", "/"];

  // Jika pengguna belum login dan mencoba mengakses rute tertentu
  if (
    !accessToken &&
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    console.log("User is not logged in, redirecting to login page");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika pengguna sudah login dan mencoba mengakses halaman login
  if (accessToken && publicOnlyRoutes.includes(request.nextUrl.pathname)) {
    console.log("User is already logged in, redirecting to dashboard");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
