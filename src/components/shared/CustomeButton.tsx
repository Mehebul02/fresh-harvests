import React from 'react';
import { Button } from '../ui/button';
import { twMerge } from 'tailwind-merge';
interface ICustomButtonProps {
    text:string;
    className:string;
  }
  
const CustomeButton = ({text,className}:ICustomButtonProps) => {
    return (
        <div>
             <Button className={twMerge("text-[#FF6A1A] bg-white border border-[#FF6A1A] md:ml-10 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold  hover:text-white hover:bg-[#176D38] hover:border-[#176D38] cursor-pointer transition duration-300", className)} >
       {text}
        </Button>
        </div>
    );
};

export default CustomeButton;