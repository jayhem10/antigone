import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

export const CustomersComponent = () => {
    return (
        <div className="h-screen flex items-center justify-center text-justify flex-col  space-y-8 overflow-hidden bg-red-500 relative">
            <div className='text-center mt-8 font-extrabold text-[80px] tracking-wide uppercase'>Nos clients</div>
            <div className="w-96 relative flex items-center justify-center">
                <div className="flex-grow border-t-2 border-white"></div>
                <div className='flex justify-center text-white'>
                    <Image
                        src="/omega.svg"
                        alt="omega"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex-grow border-t-2 border-white"></div>
            </div>

            <motion.div
                style={{
                    display: 'flex',
                    overflow: 'hidden',
                    width: '100%',
                    whiteSpace: 'nowrap',
                }}
                animate={{
                    x: '-100%', // Défilement de la droite vers la gauche
                }}
                transition={{
                    duration: 5, // Durée de l'animation en secondes
                    ease: 'linear', // Type d'animation linéaire
                    repeat: Infinity, // Répéter indéfiniment
                }}
            >
                <motion.span
                    style={{
                        display: 'inline-block',
                        fontSize: '2rem',
                    }}
                    animate={{
                        x: '100%', // Mouvement du texte sur toute la largeur de l'écran
                    }}
                    transition={{
                        duration: 5, // Durée de l'animation en secondes (même que le parent)
                        ease: 'linear', // Type d'animation linéaire
                        repeat: Infinity, // Répéter indéfiniment
                    }}
                >
                    Antigone - SLAP - RST - RIVOLI - TERE TAHITI
                </motion.span>
            </motion.div>
        </div>
    );
};

