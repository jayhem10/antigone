'use client'

import { ImageComponent } from '@/components/ImageComponent';
import React, { useEffect, useState } from 'react';
import { MenuComponent } from '@/components/MenuComponent';
import { DescriptionComponent } from '@/components/DescriptionComponent';
import { ProjectComponent } from '@/components/ProjectComponent';
import { ListComponent } from '@/components/ListComponent';
import { CursorComponent } from '@/components/CursorComponent';
import CursorSvg from '@/components/svg/CursorSvg';
import { CustomersComponent } from '@/components/CustomersComponent';


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 10-second loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 10 seconds in milliseconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className='bg-[#F5F5DC] overflow-y-scroll overflow-x-hidden z-0 relative '>
      {loading ? (
        <div className="h-screen w-screen relative text-red-500 flex flex-col items-center justify-center space-y-8 text-center overflow-hidden z-0 ">
          <div className="loader">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 375.7 98.8"
              width={200}
              height={200}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="heart"
            >
              <path fill="currentColor" d="M84,92.9c6.7-3.4,13.9-5.9,21.2-7.8c7.3-1.9,14.8-3.1,22.3-4c7.5-0.9,15.1-1.4,22.6-1.5
           c7.6-0.1,15.1,0.1,22.8,0.7l-1,4.4c-9-2.4-17.4-8-23.1-15.9c-5.6-8-8.2-18.3-6.4-28.2c1.7-9.9,7.5-18.9,15.3-25
           c7.9-6.2,17.8-9.4,27.6-9.7c9.9-0.3,19.9,2.6,28.1,8.4c8.2,5.7,14.5,14.4,16.7,24.4c1.1,5,1.2,10.1,0.3,15
           c-0.9,4.9-2.7,9.7-5.4,13.9c-5.3,8.4-13.6,14.5-22.7,17.4l-0.1-6.2c4.8,1.6,10.4,2,15.3,3.7c33.9,11.9,51.1,1.2,51.3,1.7
           c0.1,0.5-3.1,7.2-26.6,6c-5.5-0.3-19.8-1.5-25.4-2.1c-5.6-0.6-11-1.5-16.6-3.1c-1.7-0.5-2.7-2.2-2.2-3.9c0.3-1,0.9-1.7,1.8-2.1
           l0.3-0.1c7.5-3.3,14-8.7,17.8-15.6c1.9-3.5,3.2-7.2,3.7-11c0.5-3.8,0.3-7.7-0.7-11.4c-2-7.4-6.7-14-13.2-18.3
           c-6.4-4.4-14.3-6.6-22.1-6.5c-7.9,0.1-15.7,2.6-22,7.3c-6.3,4.5-11.1,11.3-12.7,18.9c-1.8,7.6-0.4,15.9,3.8,22.7
           c4.1,7,10.9,12.4,18.7,15.5l0.2,0.1c1.2,0.5,1.7,1.8,1.2,2.9c-0.4,1-1.4,1.5-2.4,1.4c-7.3-0.9-14.8-1.4-22.3-1.6
           c-7.5-0.2-14.9-0.1-22.4,0.4c-7.5,0.5-14.9,1.4-22.2,2.8C98.2,87.9,91,89.9,84,92.9"/>
            </svg>
          </div>

        </div>
      ) : (
        <>
          <MenuComponent />

          <CursorComponent />

          <section id='intro' className=''>
            <ImageComponent />
          </section>

          <section id='citations'>
            <DescriptionComponent />
          </section>

          <section id='projects'>
            <ProjectComponent />
          </section>

          <section id='liste'>
            <ListComponent />
          </section>

          <section id='customers'>
            <CustomersComponent />
          </section>
        </>
      )}
    </div>
  );
};
