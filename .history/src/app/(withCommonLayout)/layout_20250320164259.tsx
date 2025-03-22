
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

import React from 'react';

const CommonLayout =async ({children}:{children:React.ReactNode}) => {
    // const session = await getServerSession(authOptions)
    return (
        <body>
       <Navbar  />
         
           <main className='min-h-screen'> {children}</main>
           <Footer/>
        </body>
    );
};

export default CommonLayout;