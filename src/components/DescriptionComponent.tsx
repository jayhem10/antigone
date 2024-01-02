'use client'

import Image from 'next/image';
import React from 'react';


export const DescriptionComponent = () => {

    return (
        <div className="h-screen flex items-center justify-center text-justify w-full  flex-col  space-y-8 overflow-hidden bg-red-500 relative">
            <div className='text-center mt-8 font-extrabold text-[80px] tracking-wide uppercase'>Antigone Communication</div>
            <div className="w-96 relative flex items-center justify-center">
                <div className="flex-grow border-t-2 border-white"></div>
                <div className=' flex justify-center'>
                    <Image
                        src="/omega.svg"
                        alt="omega"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex-grow border-t-2 border-white"></div>
            </div>
            <div className='text-center mt-28 font-bolder text-[50px] tracking-wide px-32'>
                <p>Une équipe d’une dizaine de personnes au service de la mise en scène créative de votre image de marque, de vos messages institutionnels, des avantages compétitifs de vos produits…</p>
                <p className='mt-10'>Grâce à une organisation rigoureuse et dotée d’une forte orientation client, l’agence fait plus que jamais rimer créativité avec qualité, réactivité et disponibilité.</p>
            </div>
        </div>
    )
};