import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const DashboardLayout = async() => {
    const session = await getServerSession(authOptions)

    return (
        <div className=' mt-10 flex justify-center items-center'>
            <h1 className='text-4xl '>Welcome to {session?.user?.name || 'Dashboard'} </h1>
        </div>
    );
};

export default DashboardLayout;