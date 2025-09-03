"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useAuthStore } from "@/store";
import { Button } from "@/components/ui/button";
import { Code2, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mx-3 flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">ファディル</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {isAuthenticated && (
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {!isAuthenticated ? (
            <Button asChild variant="ghost">
              {pathname === "/login" ? (
                <Link href="/">Beranda</Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </Button>
          ) : (
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
