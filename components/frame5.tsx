import { Lightbulb, Settings, ShieldCheck } from 'lucide-react';
import React from 'react'

const Lines = ({ children, text}: { children: React.ReactNode; text: string }) => (
  <div className='flex flex-row space-x-4'>
    {children}
    <p>{text}</p>
  </div>
)

const Frame5 = () => {
  return (
    <div id='about' className='flex flex-row ml-auto md:mx-12 md:flex-row px-4 md:px-12 py-8 md:py-16 max-w-7xl'>
      <div className="hidden md:flex relative w-full md:w-1/2 h-[400px] lg:h-[500px] justify-between items-center">
        <h1 className='font-outfit text-[54px] font-bold'>Why
          <br />
          <span className='text-[#00d9f1]'>IN</span>
          <span className='text-[#de9000]'>TECH?</span>

        </h1>
      </div>
      <div className='flex flex-col font-outfit flex-1 justify-center w-full md:w-1/2 mb-8 md:mb-0'>
        <p>At InTech, we deliver solutions that prioritize:</p>
        <div className='space-y-4 mt-8'>
          <Lines text="Efficiency: Streamline operations and save time with smart technology."><Settings color="#00d9f1" /></Lines>
          <Lines text="Security: Safeguard your workplace with advanced, reliable systems."><ShieldCheck color="#00d9f1" /></Lines>
          <Lines text="Innovation: Stay ahead with cutting-edge solutions designed for the future."><Lightbulb color="#00d9f1" /></Lines>
        </div>
      </div>
      
    </div>
  )
}

export default Frame5