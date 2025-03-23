import Container from '@/components/shared/Container';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    return (
        <div className=" min-h-screen ">
      <div className=" rounded-xl shadow-lg p-6  ">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/path-to-your-profile-image.jpg" // Image Path
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-[#4CAF50]"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Mehebul Alif</h1>
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