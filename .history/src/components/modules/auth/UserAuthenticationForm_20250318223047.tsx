/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { loginUser, registerUser } from '@/services/AuthServices';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, registrationSchema } from './validation';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react"
interface ILogin {
  login: string;
}

const LoginForm = ({ login }: ILogin) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility
  const form = useForm({
    resolver: zodResolver(isSignUp ? registrationSchema : loginSchema),
  });
  const { formState: { isSubmitting } } = form;
  const router = useRouter();
  
  const onSubmit = async (data: any) => {
    // console.log(data);
    try {
      let res;
      if (isSignUp) {
        // Handle registration
        res = await registerUser(data);
        if (res?.success) {
          toast.success(res?.message);
          setIsDialogOpen(false); // Close dialog on successful registration
          router.push('/');
        } else {
          toast.error(res?.message);
        }
      } else {
        // Handle login
        res = await loginUser(data);
        if (res?.success) {
          toast.success("Login Successful");
          setIsDialogOpen(false); // Close dialog on successful login
        } else {
          toast.error("Login failed: " + (res?.message || "Unknown error"));
        }
      }
    } catch (err: any) {
      if (err?.response) {
        console.error("API error response:", err.response);
        toast.error(err.response.data?.message || "Something went wrong, please try again.");
      } else if (err?.message) {
        console.error("Error message:", err.message);
        toast.error(err.message || "Something went wrong.");
      } else {
        console.error("Unknown error:", err);
        toast.error("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}> {/* Control dialog visibility */}
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

              {/* If Sign Up Form, Show Name Field */}
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
              
              <div className="flex justify-between items-center">
                {/* Remember Me Checkbox */}
                {!isSignUp && (
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" id="rememberMe" {...field} className="h-4 w-4" />
                            <Label htmlFor="rememberMe" className="text-sm">Remember me</Label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Remember Me & Forgot Password for Login */}
                {!isSignUp && (
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-sm underline">Forgot Password?</a>
                  </div>
                )}
              </div>

              {/* Submit Button - Show Loading When Submitting */}
              <Button
                type="submit"
                className={`w-full cursor-pointer ${isSubmitting ? 'bg-gray-400' : 'bg-[#FF6A1A] hover:bg-[#749B3F] hover:text-white'}`}
                disabled={isSubmitting} // Disable the button during submission
              >
                {isSubmitting ? (
                  <span>Loading...</span>  // You can show a loader component here
                ) : (
                  isSignUp ? "Sign Up" : "Sign In"
                )}
              </Button>
            </form>
          </Form>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-[#4A4A52]">Or Continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-4 mt-2 w-20 mx-auto">
            <Button onClick={()=>signIn('google')} className="flex justify-center items-center pl-8 bg-gray-200 hover:bg-gray-300 cursor-pointer w-40">
              <FcGoogle />
              <span className="text-[#212337] text-[14px] font-bold">Google</span>
            </Button>
            <Button onClick={()=>signIn} className="flex justify-center items-center pl-8 bg-gray-200 hover:bg-gray-300 cursor-pointer w-40">
              <BsFacebook className="text-[#3C5A9A]" />
              <span className="text-[#212337] text-[14px] font-bold">Facebook</span>
            </Button>
          </div>

          <p className="text-center text-sm mt-4">
            {isSignUp ? (
              <>Already have an account? <span className="underline text-[#FF6A1A] cursor-pointer" onClick={() => setIsSignUp(false)}>Sign In</span></>
            ) : (
              <>Don&apos;t have an account? <span className="underline text-[#FF6A1A] cursor-pointer" onClick={() => setIsSignUp(true)}>Sign Up</span></>
            )}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
