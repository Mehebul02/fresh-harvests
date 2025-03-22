
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const CommonLayout =async ({children}:{children:React.ReactNode}) => {
    const session = await getServerSession(authOptions)
    return (
        <body>
      {
        session ?<Navbar session={session} />:<Navbar/>
      }
         
           <main className='min-h-screen'> {children}</main>
           <Footer/>
        </body>
    );
};

export default CommonLayout;