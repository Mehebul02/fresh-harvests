import { blogImage1 } from '@/app/assets';
import Image from 'next/image';
import React from 'react';



const BlogCard = () => {
    return (
        <div className='flex flex-wrap justify-center'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image className="w-full" src={blogImage1} alt='' width={400} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={readMoreLink} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          Read More
        </a>
      </div>
    </div>
        </div>
    );
};

export default BlogCard;