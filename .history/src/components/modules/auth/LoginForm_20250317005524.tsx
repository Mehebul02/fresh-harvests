/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
// import { Checkbox } from '@/components/ui/checkbox'; // Ensure this path is correct or update it to the correct path
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
const LoginForm = ({ login }) => {
    const form = useForm();

    const onSubmit = (data: any) => {
      console.log(data);
    };
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

          {/* <form className="space-y-4">
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

            <Button type="submit" className="w-full bg-[#FF6A1A] hover:bg-[#749B3F] hover:text-white cursor-pointer">
              Sign In
            </Button>
          </form> */}
<Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <a href="#" className="text-sm underline">Forgot Password?</a>
            </div>

            <Button type="submit" className="w-full bg-[#FF6A1A] hover:bg-[#749B3F] hover:text-white">
              Sign In
            </Button>
          </form>
        </Form>

          <div className="flex items-center gap-2">
  <div className="flex-1 h-px bg-gray-300"></div>
  <span className="text-sm text-[#4A4A52]">Or Sign Up with</span>
  <div className="flex-1 h-px bg-gray-300"></div>
</div>
<div className="flex justify-center gap-4 mt-2 w-20 mx-auto">
<Button className="flex justify-center items-center  pl-8 bg-gray-200  hover:bg-gray-300 cursor-pointer w-40">
              <FcGoogle className="" />
              <span className='text-[#212337] text-[14px] font-bold'>Google</span>
            </Button>
            <Button className=" flex justify-center items-center  pl-8 bg-gray-200  hover:bg-gray-300 cursor-pointer w-40">
              <BsFacebook className="text-[#3C5A9A]  " /> 
              <span className='text-[#212337] text-[14px] font-bold'>Facebook</span>
            </Button>
          
          </div>

          <p className="text-center text-sm mt-4">
            Don't have an account? <a href="/register" className="underline text-[#FF6A1A]">Sign Up</a>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
