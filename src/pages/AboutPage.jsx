import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const AboutPage = () => {
  return (
    <>
      <h1 className='text-4xl xl:text-6xl lg:text-6xl md:text-6xl mb-4 text-primary'>Github Finder</h1>
      <p className='mb-4  font-light text-1xl xl:text-2xl lg:text-2xl md:text-2xl'>A Front End App to search GitHub profiles and see their profile details. App built using React fundamentals including Components, JSX, Props, State, Handling events, List & Keys, Hooks, Routing, Context API</p>
      <p className='mb-4 font-light flex items-center gap-2 justify-end text-sm xl:text-1xl lg:text-1xl md:text-1xl'>
        <span>
          Powered by <strong>React, Tailwind CSS & daisyUI</strong>
        </span>
        <FaReact fontSize={`1.5rem`} color='rgb(14, 165, 233)' />
        <SiTailwindcss fontSize={`1.5rem`} color='rgb(14, 165, 233)' />
      </p>
    </>
  );
};

export default AboutPage;
