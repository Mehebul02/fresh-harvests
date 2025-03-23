/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import Link from "next/link";
// import { useGetCurrentUserQuery } from "@/redux/features/auth/authApi";
type USerProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
  expires: string;
  
};
interface NavbarProps {
  session: USerProps | null; 
  handleLogout
}

const ProfilePopup = ({session,handleLogout,}:NavbarProps) => {
  console.log("Session Data:", session);

 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar className="border-2 border-gray-300 hover:border-gray-500 transition-all duration-200">
          <AvatarImage
            src={session?.user?.image || "/default-avatar.png"} // Default image if session image is missing
            alt="User Profile"
            className="object-cover"
          />
          <AvatarFallback className="bg-green-600">
            {session?.user?.name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>{session?.user?.name || "Guest"}</DropdownMenuLabel>
        <p className="px-4 text-sm text-gray-500">
          {session?.user?.email || "No email"}
        </p>
        <DropdownMenuSeparator />
        <Link href="/dashboard">
          <DropdownMenuItem className="cursor-pointer">
            Dashboard
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            signOut();
            handleLogout(); // Call handleLogout to perform the logout action
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfilePopup;
