'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export const ImageComponent = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    useEffect(() => {
        setOffset({ x: position.x - window.innerWidth / 2, y: position.y - window.innerHeight / 2 });
    }, [position]);

    return (
        <>
            <div className="h-screen w-screen relative flex flex-col items-center justify-center space-y-8 text-center overflow-hidden z-0 cursor-none">
                <div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%)`, zIndex: 10 }}
                    >
                        <Image
                            src="/antigone.svg"
                            alt="antigone"
                            width={3000}
                            height={1700}
                        />
                    </motion.div>

                    <motion.div

                        initial={{ y: '-100%', opacity: 0 }} // Start the element above and with opacity 0
                        animate={{ y: '0%', x: '-10%', opacity: 1 }}
                        transition={{ duration: 0.5 }} // Set the animation duration
                    >
                        <Image
                            src="/peach.png"
                            alt="peach"
                            width={550}
                            height={400}
                            style={{
                                transform: `translate(${offset.x / 40}px, ${offset.y / 40}px)`,
                                transition: 'transform 0.1s ease'
                            }}
                        />
                    </motion.div>
                    <motion.div

                        initial={{ y: '-100%', opacity: 0 }} // Start the element above and with opacity 0
                        animate={{ y: '-20%', x: '-80%', opacity: 1 }}
                        transition={{ duration: 0.5 }} // Set the animation duration
                    >
                        <Image
                            src="/orange.png"
                            alt="orange"
                            width={500}
                            height={500}
                            style={{
                                transform: `translate(${offset.x / 60}px, ${offset.y / 60}px)`,
                                transition: 'transform 0.1s ease'

                            }}
                        />
                    </motion.div>
                    <motion.div
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%)`, zIndex: 10 }}
                        initial={{ y: '-100%', opacity: 0 }} // Start the element above and with opacity 0
animate={{ y: '-50%', x: '70%', opacity: 1 }}
transition={{ duration: 0.5 }} // Set the animation duration
>
                        <Image
                            src="/ananas.png"
                            alt="ananas"
                            width={600}
                            height={550}
                            style={{
                                transform: `translate(${offset.x / 10}px, ${offset.y / 10}px)`,
                                zIndex: 1,
                                transition: 'transform 0.1s ease'

                            }}
                        />
                    </motion.div>
                    <div style={{ position: 'absolute', top: '95%', left: '50%', transform: `translate(-50%, -50%)`, zIndex: 11 }}>
                        <svg
                            width="30px"
                            height="100%"
                            viewBox="0 0 247 390"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }} />
                            <path
                                id="mouse"
                                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

