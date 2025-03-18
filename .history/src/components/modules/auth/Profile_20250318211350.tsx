/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import { useSelector,  } from "react-redux";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
//   DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

const ProfilePopup = ({session}) => {
  
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {/* <AvatarImage src={user?.photo || "/default-avatar.png"} alt="User" />
          <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback> */}
           <AvatarImage src={session?.user?.image | ""} alt="@shadcn" />
           <h1>{session?.user?.name}</h1>
           <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {/* <DropdownMenuLabel>{user?.name || "Guest"}</DropdownMenuLabel>
        <p className="px-4 text-sm text-gray-500">{user?.email || "No email"}</p> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfilePopup;
