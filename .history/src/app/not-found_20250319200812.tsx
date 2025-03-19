import Container from '@/components/shared/Container';
import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Container className='flex items-center justify-center h-screen'>
            <div>
                <Image  src={notFou}/>
            </div>
        </Container>
    );
};

export default NotFoundPage;