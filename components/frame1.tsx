import React from 'react'
import Image from 'next/image'
const Frame1 = () => {
  return (
    <div id='home' className='flex flex-row mx-auto md:mx-12 md:flex-row px-4 md:px-12 py-8 md:py-16 max-w-7xl'>
        <div className='flex flex-col font-outfit flex-1 justify-center w-full md:w-1/2 mb-8 md:mb-0 '>
            <p className='text-[34px] md:text-4xl font-bold text-[#00d9f1]'>Smarter Workplaces, </p>
            <p className='text-[34px] md:text-4xl font-bold text-[#de9000]'>Secure Solutions.</p>
            <p className='text-base md:text-lg lg:text-xl max-w-md mb-6 mt-5'>Revolutionize workplace efficiency and security through innovative smart technology solutions.</p>
        </div>
        <div className="hidden md:block relative w-full md:w-1/2 h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                  src="/phone2.png" 
                  alt="Smart phone" 
                  width={200}
                  height={380}
                  className="absolute transform rotate-[30deg] z-10 w-[200px] h-auto lg:w-[240px]"
                  style={{ top: "13%", left: "40%" }}
              />
              <Image 
                  src="/phone11.png" 
                  alt="Smart phone app" 
                  width={190}
                  height={380}
                  className="absolute z-20 w-[190px] h-auto lg:w-[230px]"
                  style={{ top: "15%", left: "15%" }}
              />
            </div>
      </div>

    </div>
  )
}

export default Frame1