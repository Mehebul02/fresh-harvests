import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // try {

        //     const res = await loginUser(data)
        //     if (res?.success) {
        //         toast.success(res?.message)
        //     }
        //     else {
        //         toast.error(res?.message)
        //     }

        // }
        // catch (err) {
        //     console.log(err);
        // }
    }
    return (
        <div>
              <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 to-purple-200'>
            <div className='w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg'>
                <div className='flex justify-center mb-6'>
                    {/* < src='/logo.png' alt='Logo' className='w-12 h-12' /> */}
                </div>
                <h2 className='text-2xl font-semibold text-center'>Sign Up</h2>
                <p className='text-gray-500 text-center text-sm mb-6'>Enter your email and phone number to sign up.</p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control} name='email' render={({ field }) => (
                            <FormItem >
                                <FormLabel className='mt-4'>Email</FormLabel>
                                <FormControl>
                                    <Input type='email'  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='password' render={({ field }) => (
                            <FormItem>
                                <FormLabel className='mt-4'>Password</FormLabel>
                                <FormControl>
                                    <Input type='password'  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* <div className="flex mt-4 justify-center">
                            <ReCAPTCHA sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}`}
                                onChange={handleReCaptcha} />
                        </div> */}


                        <Button  type='submit' className='w-full cursor-pointer mt-4 bg-purple-600 hover:bg-purple-700 text-white text-lg py-2 rounded-lg'>
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
                    Already have an account? <a href='/register' className='text-purple-600 font-semibold'>Sign In</a>
                </p>
            </div>
        </div>
        </div>
    );
};

export default LoginForm;