'use client'
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

 useGSAP(() => {
    gsap.to(ref.current,{
      transform: 'translateX(-150%)',
      scrollTrigger: {
        trigger: ref.current,
        scroller: 'body',
        start: 'top 0%',
        end: 'top -150%',
        scrub: 2,
        pin: true

      }
    })
  }, []);
  return (
    <>
 {/* <div  className='flex justify-center items-center h-screen w-screen bg-slate-500'>
  <div ref={ref} className='w-[300px] h-[300px] bg-red-400'></div>
 </div>
  <div className='flex justify-center items-center h-screen w-screen bg-slate-600'>
  <div ref={ref2} className='w-[300px] h-[300px] bg-red-400'></div>
 </div>
  <div className='flex justify-center items-center h-screen w-screen bg-slate-800'>
  <div className='w-[300px] h-[300px] bg-red-400'></div>
 </div> */}
 <div className='w-[100%] h-[100%] bg-slate-400 overflow-hidden'>
<h1 ref={ref} className='text-[700px] uppercase'>Experience</h1>
 </div>
 </>
  )
}

export default Page