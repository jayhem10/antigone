import { ImageComponent } from '@/components/ImageComponent';
import React from 'react';
import { MenuComponent } from '@/components/MenuComponent';
import { DescriptionComponent } from '@/components/DescriptionComponent';
import { ProjectComponent } from '@/components/ProjectComponent';
import { ListComponent } from '@/components/ListComponent';
import { CursorComponent } from '@/components/CursorComponent';


export default function App() {
  return (
    <div className='bg-[#F5F5DC] overflow-y-scroll overflow-x-hidden z-0 relative cursor-none'>

      <MenuComponent />

      <CursorComponent  />

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
    </div>
  );
};

