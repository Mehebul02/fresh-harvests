'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const LoginForm = ({login}) => {
    const form = useForm();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* Button to open Modal */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg py-2 px-4 rounded-lg">
                      {sign}
                    </Button>
                </DialogTrigger>

                <DialogContent className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold text-center">Sign In</DialogTitle>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField control={form.control} name='email' render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='mt-4'>Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name='password' render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='mt-4'>Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <Button type='submit' className='w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white text-lg py-2 rounded-lg'>
                                Sign In
                            </Button>
                        </form>
                    </Form>

                    <p className='text-center text-sm text-gray-500 mt-4'>Or Sign Up with</p>
                    <div className='flex justify-center gap-4 mt-2'>
                        <Button className='p-2 bg-gray-200 rounded-full hover:bg-gray-300'>
                            <FaFacebookF className='text-blue-600' />
                        </Button>
                        <Button className='p-2 bg-gray-200 rounded-full hover:bg-gray-300'>
                            <FaGoogle className='text-red-500' />
                        </Button>
                    </div>

                    <p className='text-center text-sm text-gray-600 mt-4'>
                        Don't have an account? <a href='/register' className='text-purple-600 font-semibold'>Sign Up</a>
                    </p>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LoginForm;
