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
                <Image  src={notFound} alt='notFound' width={200} height={200}/>
                <h1 className='text-center mb-4'>Oops! Page not found</h1>
                <div className='text-center'>
                   <Link href='/'>
                   <CustomeButton className='mt-10' text='Back To Home'/>
                   </Link>

                </div>
            </div>
        </Container>
    );
};

export default NotFoundPage;