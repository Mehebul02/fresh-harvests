import Link from "next/link";
import { FaFacebook, , FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

const SocialLinks = ({className,}:{className?:string;}) => {
    const linksData=[
        {icon:<RiTwitterXFill/>, href:'https://github.com/Mehebul02'},
        {icon:<FaFacebook/>, href:'https://www.facebook.com/alif.islam.212'},
        {icon:<FaInstagram/>, href:'https://www.facebook.com/alif.islam.212'}
    ]
    return (
        <div className="text-xl text-white/50 flex items-center gap-5 pt-5">
            {linksData?.map((item,index)=>(
                <Link key={index} href={item.href} target="_blank" className={twMerge("bg-themeWhite text-black border border-white/200 inline-flex p-2 rounded-full hover:text-sky-600 hover:border-sky-300 duration-300 cursor-pointer",className)}>{item.icon}  </Link>
            ))}
        </div>
    );
};

export default SocialLinks;