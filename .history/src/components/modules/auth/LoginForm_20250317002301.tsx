/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const LoginForm = ({ login }) => {
  return (
    <div className="flex justify-center items-center">
      {/* Button to open Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className='border border-[#749B3F] text-black bg-white hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] text-lg py-2 px-4 rounded-lg cursor-pointer'>
            {login}
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Sign In</DialogTitle>
          </DialogHeader>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <Input type="password" placeholder="Enter your password" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Input type="checkbox" className="w-4 h-4" />
                <label className="ml-2 text-sm">Remember me</label>
              </div>
              <a href="#" className="text-sm underline">Forgot Password?</a>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

         .divider
          <div className="flex justify-center gap-4 mt-2">
            <Button variant="outline">
              <FaFacebookF />
            </Button>
            <Button variant="outline">
              <FaGoogle />
            </Button>
          </div>

          <p className="text-center text-sm mt-4">
            Don't have an account? <a href="/register" className="underline">Sign Up</a>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
