import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const CommonLayout = ({ children, session }: { children: React.ReactNode, session: any }) => {
    return (
        <body>
            {session && <Navbar session={session} />}
            <main className='min-h-screen'>{children}</main>
            <Footer />
        </body>
    );
};

export const getServerSideProps = async () => {
    const session = await getServerSession(authOptions);
    return { props: { session } };
};

export default CommonLayout;
