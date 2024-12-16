import { Facebook, Instagram, Lightbulb, Settings, ShieldCheck, Twitter } from 'lucide-react';
import React from 'react'


const Bottom = () => {
  return (
    <div className='flex flex-row  justify-between md:mx-12 md:flex-row px-4 md:px-12 py-8 md:py-7 max-w-7xl font-outfit'>
      <div className='flex text-[12px] space-x-9'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
      </div>
      <div className='flex space-x-5'>
        <Facebook color="#ffffff" className='bg-black rounded-2xl w-auto h-auto p-1'/>
        <Instagram color="#ffffff" className='bg-black rounded-2xl w-auto h-auto p-1'/>
        <Twitter color="#ffffff" className='bg-black rounded-2xl w-auto h-auto p-1'/>

      </div>
      
    </div>
  )
}

export default Bottom