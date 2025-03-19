import Container from '@/components/shared/Container';
import Image from 'next/image';
import React from 'react';
import { notFound } from './assets';
import CustomeButton from '@/components/shared/CustomeButton';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <Container className='flex items-center justify-center h-screen'>
            <div>
                <Image  src={notFound} alt='notFound' width={400} height={400}/>
                <h1 className='text-center'>Oops! Page not found</h1>
                <div className='text-center'>
                   <Link href='/'>
                   <CustomeButton className='' text='Back To Home'/>
                   </Link>

                </div>
            </div>
        </Container>
    );
};

export default NotFoundPage;