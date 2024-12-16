import React from 'react'
import Image from 'next/image'

const Frame4 = () => {
  return (
    <div className='flex flex-col ml-auto md:mx-12 md:flex-row px-4 md:px-12 py-8 md:py-16 max-w-7xl '>
        <div className="hidden md:flex relative w-full md:w-1/2 h-[400px] lg:h-[500px] justify-between items-center">
            <div className="flex flex-col items-center space-y-4 ">
                <Image 
                    src="/image1.png" 
                    alt="Smart phone app" 
                    width={290}
                    height={480}
                    className="w-[200px] h-auto lg:w-[330px] rounded-xl"
                    
                />
                  <Image 
                    src="/image2.png" 
                    alt="Smart phone app" 
                    width={290}
                    height={480}
                    className="w-[200px] h-auto lg:w-[330px] rounded-xl"
                    
                />

            </div>
        </div>
         <div className='flex flex-col font-outfit flex-1 justify-center w-full md:w-1/2 mb-8 md:mb-0 '>
            <p className='text-[34px] font-bold text-[#00d9f1] '>Face Recognition and Attendance
            <span className='text-[34px]  font-bold text-[#de9000]'> System</span> </p>
            <p className='text-base md:text-lg lg:text-xl max-w-md mb-6 mt-5'>
              Enhance workplace security and efficiency with real-time face recognition seamlessly 
              integrated into CCTV systems. Automatically detect and record attendance with cutting-edge 
              technology.</p>
        </div>
      </div>

    
  )
}

export default Frame4