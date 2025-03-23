import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const DashboardLayout = async() => {
    const session = await getServerSession(authOptions)
    return (
        <div className=' mt-10'>
            <h1>Welcome to </h1>
        </div>
    );
};

export default DashboardLayout;