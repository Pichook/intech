import { LogOut } from 'lucide-react'
import React from 'react'

const Checkout = () => {
  return (
    <div className='w-[12rem]  rounded-2xl bg-white drop-shadow-md border-2 border-gray-200  px-6 py-3 font-outfit'>
        <div className='flex flex-row justify-between'>
            <LogOut color="#00D9F1"/>
            <p>Check Out</p>
        </div>
        <p className='font-bold mt-4 text-[#46777C]'>05:00 pm</p>
        <p>Go Home</p>
    </div>
  )
}

export default Checkout