"use client";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice"; // Adjust the path based on your Redux setup
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfilePopup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user); // Adjust based on your Redux structure

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.photo || "/default-avatar.png"} alt="User" />
          <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>{user?.name || "Guest"}</DropdownMenuLabel>
        <p className="px-4 text-sm text-gray-500">{user?.email || "No email"}</p>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => dispatch(logout())}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfilePopup;
