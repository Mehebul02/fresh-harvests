'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const LoginForm = ({ login }) => {
  return (
    <div className="flex justify-center items-center">
      {/* Button to open Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="border border-[#749B3F] text-black bg-white hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] text-lg py-2 px-4 rounded-lg">
            {login}
          </button>
        </DialogTrigger>

        <DialogContent className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center">Sign In</DialogTitle>
          </DialogHeader>

          <form>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white text-lg py-2 rounded-lg"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">Or Sign Up with</p>
          <div className="flex justify-center gap-4 mt-2">
            <Button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
              <FaFacebookF className="text-blue-600" />
            </Button>
            <Button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
              <FaGoogle className="text-red-500" />
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account? <a href="/register" className="text-purple-600 font-semibold">Sign Up</a>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;