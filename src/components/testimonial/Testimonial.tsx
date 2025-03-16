
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Container from '../shared/Container';
import { testimonial_image } from '@/app/assets';
import TitleSection from '../shared/TitleSection';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, CompanyX',
    feedback: 'This service is amazing! I highly recommend it.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, StartupY',
    feedback: 'A great experience from start to finish.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Manager, BusinessZ',
    feedback: 'Professional and outstanding service.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const TestimonialSlider = () => {
  return (
    <Container className='py-10'>
      <TitleSection className="text-center" title="Testimonial" subtitle="What Our Customers Say" description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:" />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className=" flex flex-col md:flex-row justify-center gap-4 items-center bg-white shadow-lg p-6 rounded-xl text-center ">

              <Image src={testimonial_image} alt='text' width={200} height={200} />
              <div>
                <div className="max-w-md mx-auto bg-[#F4F6F6] rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                  <div className="p-8">
                    <p className="mt-2 text-gray-500">
                      I absolutely love Fresh Harvest! The quality of their produce is outstanding. Its always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <p className="text-lg font-semibold text-gray-900">Jane Doe -</p>
                      <p className="text-sm text-gray-500">Professional chef</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestimonialSlider;
