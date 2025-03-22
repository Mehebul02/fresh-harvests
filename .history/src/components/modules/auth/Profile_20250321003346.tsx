
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
import { logout } from "@/services/AuthServices";
import { signOut } from "next-auth/react";
// import { Session } from "next-auth";

const ProfilePopup = ({ user }: { user: user }) => {
  // console.log("Session Data:", session); 
  const handleLogOut = () => {
    logout();
    // setIsLoading(true);
    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //   router.push("/");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar className="border-2 border-gray-300 hover:border-gray-500 transition-all duration-200">
          <AvatarImage
            src={user?.image || "/default-avatar.png"} // Default image if session image is missing
            alt="User Profile"
            className="object-cover"
          />
          <AvatarFallback className="bg-green-600">{user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>{user?.name || "Guest"}</DropdownMenuLabel>
        <p className="px-4 text-sm text-gray-500">{user?.email || "No email"}</p>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfilePopup;
