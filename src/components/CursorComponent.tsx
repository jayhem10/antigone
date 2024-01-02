'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CursorSvg from './svg/CursorSvg';


export const CursorComponent = () => {

    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const cursorElement = document.getElementById('custom-cursor');
        if (cursorElement) {
            cursorElement.style.left = `${position.x}px`;
            cursorElement.style.top = `${position.y}px`;
        }
handleScroll()

    }, [position]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.pageX, y: e.pageY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    const handleScroll = () => {
        const citations = document.getElementById('citations') as HTMLElement;
        const projects = document.getElementById('projects') as HTMLElement;
        const liste = document.getElementById('liste') as HTMLElement;

        const cursor = document.getElementById('custom-cursor') as HTMLDivElement;
    
        const height = window.innerHeight;
        const citationsTop = citations?.offsetTop || 0;
        const projectsTop = projects?.offsetTop || 0;
        const listesTop = liste?.offsetTop || 0;
    
        cursor.style.setProperty('--mouse-color', '#f64e47'); // Change this to your default color
    
        if (position.y >= citationsTop -100  && position.y < citationsTop + height) {
            cursor.style.setProperty('--mouse-color', '#ffffff');
        } 
         if (position.y >= projectsTop -100 && position.y < projectsTop + height) {
            cursor.style.setProperty('--mouse-color', '#3db196');
        } 
        if (position.y >= listesTop - 100 && position.y < listesTop + height) {
            cursor.style.setProperty('--mouse-color', '#000000');
        } 
      };
    

    return (
        <div id="custom-cursor" className='text-[--mouse-color] fixed pointer-events-none z-50'>
            <CursorSvg/>
        </div>
    )
}