/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, registrationSchema } from './validation';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import { useChangePasswordMutation, useLoginUserMutation, useRegisterUserMutation,  } from '@/redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/features/auth/authSlice'; 

interface ILogin {
  login: string;
}

const LoginForm = ({ login }: ILogin) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isForgotPasswordDialogOpen, setIsForgotPasswordDialogOpen] = useState(false); // Forgot Password Dialog
  const form = useForm({ resolver: zodResolver(isSignUp ? registrationSchema : loginSchema as any) });
  const { formState: { isSubmitting } } = form;
  const router = useRouter();
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [forgotPassword] = useChangePasswordMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    try {
      let res;
      if (isSignUp) {
        res = await registerUser(data).unwrap();
        if (res?.success) {
          toast.success(res?.message);
          setIsDialogOpen(false);
          router.push('/');
        } else {
          toast.error(res?.message);
        }
      } else {
        res = await loginUser(data).unwrap();
        if (res?.success && res?.data?.token) {
          localStorage.setItem("token", res?.data?.token);
          dispatch(setUser({ user: res?.data?.userName, email: res?.data?.email, token: res?.data?.token }));
          toast.success("Login Successful");
          setIsDialogOpen(false);
          router.push('/');
        } else {
          toast.error("Login failed: " + (res?.message || "Unknown error"));
        }
      }
    } catch (err: any) {
      console.error("Error:", err);
      toast.error(err?.message || "Something went wrong.");
    }
  };

  // Forgot Password Submit Handler
  const onForgotPasswordSubmit = async (data: any) => {
    try {
      const res = await forgotPassword(data).unwrap();
      if (res?.success) {
        toast.success("Password reset link sent to your email.");
        setIsForgotPasswordDialogOpen(false);
      } else {
        toast.error(res?.message || "Failed to send password reset link.");
      }
    } catch (err: any) {
      console.error("Error:", err);
      toast.error(err?.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="border border-[#749B3F] text-black bg-white hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] text-lg py-2 px-4 rounded-lg cursor-pointer">
            {login}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {isSignUp && (
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
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
              <Button
                type="submit"
                className={`w-full cursor-pointer ${isSubmitting ? 'bg-gray-400' : 'bg-[#FF6A1A] hover:bg-[#749B3F] hover:text-white'}`}
                disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </form>
          </Form>
          <div className="flex justify-center gap-4 mt-2">
            <Button onClick={() => signIn('google', { callbackUrl: "https://your-callback-url.com" })} className="flex items-center bg-gray-200 hover:bg-gray-300 cursor-pointer w-40">
              <FcGoogle /> <span className="text-[#212337] text-[14px] font-bold">Google</span>
            </Button>
            <Button onClick={() => signIn('facebook')} className="flex items-center bg-gray-200 hover:bg-gray-300 cursor-pointer w-40">
              <BsFacebook className="text-[#3C5A9A]" /> <span className="text-[#212337] text-[14px] font-bold">Facebook</span>
            </Button>
          </div>
          <p className="text-center text-sm mt-4">
            {isSignUp ? (
              <>Already have an account? <span className="underline text-[#FF6A1A] cursor-pointer" onClick={() => setIsSignUp(false)}>Sign In</span></>
            ) : (
              <>
                Don&apos;t have an account? <span className="underline text-[#FF6A1A] cursor-pointer" onClick={() => setIsSignUp(true)}>Sign Up</span>
                <span className="underline text-[#FF6A1A] cursor-pointer ml-4" onClick={() => setIsForgotPasswordDialogOpen(true)}>Forgot Password?</span>
              </>
            )}
          </p>
        </DialogContent>
      </Dialog>

      {/* Forgot Password Dialog */}
      // Forgot Password Dialog
<Dialog open={isForgotPasswordDialogOpen} onOpenChange={setIsForgotPasswordDialogOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-center">Change Password</DialogTitle>
    </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onForgotPasswordSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your old password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your new password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#FF6A1A] hover:bg-[#749B3F] hover:text-white cursor-pointer">
          Change Password
        </Button>
      </form>
    </Form>
  </DialogContent>
</Dialog>

    </div>
  );
};

export default LoginForm;
