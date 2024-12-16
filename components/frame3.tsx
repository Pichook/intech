import React from 'react'
import Image from 'next/image'
const Frame3 = () => {
  return (
    <div className='flex flex-row mx-auto md:mx-12 md:flex-row px-4 md:px-12 py-8 md:py-16 max-w-7xl'>
        <div className='flex flex-col font-outfit flex-1 justify-center w-full mb-8 md:mb-0 '>
            <p className='text-[34px] md:text-4xl font-bold text-[#00d9f1]'>Smart Laundry 
            <span className='text-[34px] md:text-4xl font-bold text-[#de9000]'> System</span></p>
            <p className=' md:text-sm  max-w-md mb-6 mt-5'>
              Simplify your laundry routine with QR code activation and automated weekly system refresh. 
              Enjoy a hassle-free and efficient experience tailored to modern living.
            </p>
            <div className='flex space-x-3'>
              <Image
                src="/bigwasher.png" 
                alt="Smart phone" 
                width={150}
                height={280}
              />
              <Image
                src="/redwasher.png" 
                alt="Smart phone" 
                width={150}
                height={280}
              />
              <Image
                src="/scan.png" 
                alt="Smart phone" 
                width={257}
                height={238}
                className='rounded-xl'
              />
            </div>
        </div>
        <div className="hidden md:block relative w-full md:w-1/2 h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
            <Image 
                src="/phone2.png" 
                alt="Smart phone" 
                width={200}
                height={380}
                className="absolute transform z-10 w-[200px] h-auto lg:w-[240px]"
                style={{ top: "15%", left: "55%" }}
            />
            </div>
      </div>

    </div>
  )
}

export default Frame3