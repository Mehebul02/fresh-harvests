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
import { registrationSchema } from './registerValidation';
import { loginSchema } from './loginValidation';
import { zodResolver } from '@hookform/resolvers/zod';
interface ILogin  {
  login:string
}

const LoginForm = ({ login }:ILogin) => {
    const [isSignUp, setIsSignUp] = useState(false); 
    const form = useForm({resolver: zodResolver(isSignUp ? registrationSchema : loginSchema)});

    const onSubmit = async(data: any) => {
        console.log(data);
        try {
            if (isSignUp) {
                // Handle registration
                const res = await registerUser(data)
                if (res?.success) {
                    toast.success(res?.message)
                }
                else {
                    toast.error(res?.message)
                }
               
                setIsSignUp(false); 
            } else {
                
                const res = await loginUser(data);
                console.log('Login Successful:', res);
                
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='border border-[#749B3F] text-black bg-white hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] text-lg py-2 px-4 rounded-lg cursor-pointer'>
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


                            {/* Remember Me & Forgot Password for Login */}
                            {!isSignUp && (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                                    </div>
                                    <a href="#" className="text-sm underline">Forgot Password?</a>
                                </div>
                            )}

                            <Button type="submit" className="w-full cursor-pointer bg-[#FF6A1A] hover:bg-[#749B3F] hover:text-white">
                                {isSignUp ? "Sign Up" : "Sign In"}
                            </Button>
                        </form>
                    </Form>

                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-[#4A4A52]">Or Continue with</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-2 w-20 mx-auto">
                        <Button className="flex justify-center items-center pl-8 bg-gray-200 hover:bg-gray-300 cursor-pointer w-40">
                            <FcGoogle />
                            <span className='text-[#212337] text-[14px] font-bold'>Google</span>
                        </Button>
                        <Button className="flex justify-center items-center pl-8 bg-gray-200 hover:bg-gray-300 cursor-pointer w-40">
                            <BsFacebook className="text-[#3C5A9A]" />
                            <span className='text-[#212337] text-[14px] font-bold'>Facebook</span>
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