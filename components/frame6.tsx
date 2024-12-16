
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Frame6 = () => {
  return (
    <div id='contact' className='flex flex-row mt-40 md:mx-12 md:flex-row px-4 md:px-12 py-8 md:py-16 max-w-7xl font-outfit'>
      <div className='flex flex-col flex-1 '>
        <div>
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="logo" width={70} height={70} className="mr-4" />
            <span className="text-xl font-bold">
              <span className="text-[#02FEFB]">IN</span><span className="text-[#FBB03B]">TECH</span>
            </span>
          </Link>
        </div>
        <div className='mt-8 pr-40'>
          <p>Be the leading provider of cutting-edge smart technology, creatingsmarter, more efficient, 
            and secure work environments for businesses of all sizes.</p>
        </div>

      </div>
      <div className='flex-1'>
        <p className=''>Contact us through Phone Number</p>
        <div className='flex flex-row space-x-4 mt-4 border-[1px] border-[#FBB03B] p-4 rounded-3xl w-fit'>
          <p className=''>+885 12 345 678</p>
          <button className='bg-[#FBB03B]'>Call now</button>
        </div>
        <div className='flex flex-row space-x-4 mt-4'>
          <p className='text-[#FBB03B]'>Address:</p>
          <button className='text-black text-justify'>Green Arcade 1, 2 And 3, Thmey Village, Chambak Commune, Phnom Srouch District, Kampong Speu Province, Cambodia</button>
        </div>
      </div>
      
    </div>
  )
}

export default Frame6