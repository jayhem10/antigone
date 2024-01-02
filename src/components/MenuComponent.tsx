
'use client'

import React, { useState, useEffect } from 'react';
import MenuSvg from './svg/MenuSvg';

export const MenuComponent = () => {

  const handleScroll = () => {
    const citations = document.getElementById('citations') as HTMLElement;
    const projects = document.getElementById('projects') as HTMLElement;
    const liste = document.getElementById('liste') as HTMLElement;

    const menu = document.getElementById('menu') as HTMLElement;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = window.innerHeight;
    const citationsTop = citations?.offsetTop || 0;
    const projectsTop = projects?.offsetTop || 0;
    const listesTop = liste?.offsetTop || 0;

    menu.style.setProperty('--menu-color', '#f64e47'); // Change this to your default color

    if (scrollTop >= citationsTop - 100 && scrollTop < citationsTop + height) {
      menu.style.setProperty('--menu-color', '#ffffff');
    } 
     if (scrollTop >= projectsTop - 100 && scrollTop < projectsTop + height) {
      menu.style.setProperty('--menu-color', '#3db196');
    } 
    if (scrollTop >= listesTop - 100 && scrollTop < listesTop + height) {
      menu.style.setProperty('--menu-color', '#000000');
    } 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div style={{
            position: 'fixed',
            top: '50px',
            right: '30px',
            zIndex: 2,
            color: '#f64e47',
        }}
        onScroll={handleScroll}>
            <a
                href="#_"
                id='menu'
                className={`px-10 py-5 relative rounded group overflow-hidden font-medium text-[--menu-color]  inline-block cursor-none`}

                style={{
                    transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
            <MenuSvg/>
            </a>
        </div>
    )
};