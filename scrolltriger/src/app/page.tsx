'use client'
import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const page = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  useGSAP(()=>{
  
  })
  return (
    <>
 <div className='flex justify-center items-center h-screen w-screen bg-slate-500'>
  <div className='w-[300px] h-[300px] bg-red-400'></div>
 </div>
  <div className='flex justify-center items-center h-screen w-screen bg-slate-600'>
  <div className='w-[300px] h-[300px] bg-red-400'></div>
 </div>
  <div className='flex justify-center items-center h-screen w-screen bg-slate-800'>
  <div className='w-[300px] h-[300px] bg-red-400'></div>
 </div>
 </>
  )
}

export default page