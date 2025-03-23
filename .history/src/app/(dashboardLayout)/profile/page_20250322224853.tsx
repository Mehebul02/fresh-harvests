import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const ProfilePage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
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
          <p className="text-sm text-gray-600">Frontend Developer | Web Educator</p>
        </div>

        {/* Bio */}
        <div className="text-center mb-6">
          <p className="text-gray-700 text-sm">
            Passionate web developer specializing in React and frontend technologies. Dedicated to creating user-friendly web applications and educating others in the field of web development.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaTwitter size={24} />
          </a>
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