import React from 'react'
import Image from 'next/image'
import Checkin from './checkin'
import Checkout from './checkout'
const Frame2 = () => {
  return (
    <div id='products' className='flex flex-row scroll-mt-10 ml-auto md:mx-12 md:flex-row px-4 md:px-12 py-8 md:py-16 max-w-7xl justify-between '>
        <div className="hidden md:block relative w-full md:w-1/2 h-[400px] lg:h-[500px]">
            <div className="relative flex flex-row  items-center">
                <Image 
                    src="/phone11.png" 
                    alt="Smart phone app" 
                    width={190}
                    height={380}
                    className="w-[190px] h-auto lg:w-[230px]"
                    
                />
                <div className='ml-8 space-y-8'>
                    <Checkin />
                    <Checkout />
                </div>
            </div>
        </div>
         <div className='flex flex-col font-outfit flex-1 justify-center w-full md:w-1/2 mb-8 md:mb-0 '>
            <p className='text-[34px] font-bold text-[#00d9f1] '>Mobile Attendance
            <span className='text-[34px]  font-bold text-[#de9000]'> System</span> </p>
            <p className='text-base md:text-lg lg:text-xl max-w-md mb-6 mt-5'>Effortlessly track employee attendance 
                with our seamless clock-in/out feature and real-time monitoring. 
                Stay updated with accurate records, ensuring efficiency and reliability for your workforce.</p>
        </div>
      </div>

    
  )
}

export default Frame2