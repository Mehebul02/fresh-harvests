
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const CommonLayout =as ({children}:{children:React.ReactNode}) => {
    const session = await getServerSession(authOptions)
    return (
        <>
           <Navbar/>
           <main className='min-h-screen'> {children}</main>
           <Footer/>
        </>
    );
};

export default CommonLayout;