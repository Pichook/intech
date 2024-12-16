'use client'

import Bottom from '@/components/bottom'
import Frame6 from '@/components/frame6'
import { Nav } from '@/components/nav'
import React, { useState } from 'react'

export default function page () {
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value)
    }
  return (
    <main id='demo' className="pt-20">
        <Nav />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-outfit">
            <h1 className="text-4xl font-bold mb-8">Book a Demo</h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 block placeholder:text-slate-400 p-3 w-full rounded-md border-gray-300 border-[1px] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 block placeholder:text-slate-400 p-3 w-full rounded-md border-gray-300 border-[1px] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="option" className="block text-sm font-medium text-gray-700 mb-2">
                        Select an option
                    </label>
                    <select
                        id="option"
                        name="option"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        required
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border-[1px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                        <option value="">Select an option</option>
                        <option value="option1">Mobile Attendance System</option>
                        <option value="option2">Smart Laundry System</option>
                        <option value="option3">Face Recognition & Attendance System</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#02FEFB] hover:bg-[#FBB03B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <div className="bg-white">
            <Frame6 />
            <hr className="border-t border-[#FBB03B] mt-4" />
            <Bottom />
        </div>

  </main>
  )
}
