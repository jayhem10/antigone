'use client'

import Image from 'next/image';
import React from 'react';



export const ProjectComponent = () => {

    return (
<div className="h-screen flex flex-col">
  <div className="flex flex-1">
    <div className="w-full h-full bg-[#fab9b4] flex items-center justify-center">
      <p className="text-8xl text-white">PRINT</p>
    </div>
    <div className="w-full h-full bg-[#ec6a5f] flex items-center justify-center">
      <p className="text-8xl text-white">WEB</p>
    </div>
  </div>
  <div className="flex flex-1">
    <div className="w-full h-full bg-[#bd0033] flex items-center justify-center">
      <p className="text-8xl text-white uppercase">Évènementiel</p>
    </div>
    <div className="w-full h-full bg-[#94c21f] flex items-center justify-center">
      <p className="text-8xl text-white uppercase">Vidéos</p>
    </div>
  </div>
</div>
    )
};