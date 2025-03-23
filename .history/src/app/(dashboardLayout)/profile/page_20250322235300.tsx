
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

import Image from 'next/image';
import React from 'react';

const ProfilePage = async() => {
      const session = await getServerSession(authOptions)
    return (
        <div className=" min-h-screen mt-20">
      <div className=" rounded-xl ">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <Image
             src={session?.user?.image || "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1742665897~exp=1742669497~hmac=49619a5ad0b5396bb405dcab992cb26bdace12591e2f4170a89ff5572bb5969c&w=740"} 
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-[#4CAF50]"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome to {session?.user?.name as string}</h1>
          <p className="text-sm text-gray-600">Role: USER</p>
        </div>
        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#45a049] transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProfilePage;