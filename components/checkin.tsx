import { LogIn, LogOut } from 'lucide-react'
import React from 'react'

const Checkin = () => {
  return (
    <div className='w-[12rem]  rounded-2xl bg-white drop-shadow-md border-2 border-gray-200  px-6 py-3 font-outfit'>
        <div className='flex flex-row justify-between'>
            <LogIn color="#00D9F1"/>
            <p>Check In</p>
        </div>
        <p className='font-bold mt-4 text-[#46777C]'>09:00 am</p>
        <p>On Time</p>
    </div>
  )
}

export default Checkin