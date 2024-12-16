'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const NavLink = ({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) => (
  <Link href={href} className="flex flex-col mx-2 lg:mx-2 hover:text-[#ffb339]  transition-colors" onClick={onClick}>
    {children}
  </Link>
)

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 80
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (sectionId: string) => {
    if (window.location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      router.push(`/#${sectionId}`)
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 0)
    }
  }, [])

  return (
    <nav className="font-outfit fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="logo" width={48} height={48} className="mr-4" />
              <span className="text-xl">
                <span className="text-[#02FEFB]">IN</span><span className="text-[#FBB03B]">TECH</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-[15px] font-bold ">
            <NavLink href="/" onClick={() => handleNavClick('home')}>Home</NavLink>
            <NavLink href="/#products" onClick={() => handleNavClick('products')}>Products</NavLink>
            <NavLink href="/#about" onClick={() => handleNavClick('about')}>About Us</NavLink>
            <NavLink href="/#contact" onClick={() => handleNavClick('contact')}>Contact Us</NavLink>
            <Link href="/booking" className="bg-[#02FEFB] text-black px-4 py-2 rounded-md hover:bg-[#ffb031] transition-colors hover:text-white">
              Request a Demo
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 hover:bg-[#ffb031]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" onClick={() => handleNavClick('home')}>Home</NavLink>
            <NavLink href="/#products" onClick={() => handleNavClick('products')}>Products</NavLink>
            <NavLink href="/#about" onClick={() => handleNavClick('about')}>About Us</NavLink>
            <NavLink href="/#contact" onClick={() => handleNavClick('contact')}>Contact Us</NavLink>
            <Link href="/booking" className="block w-full text-left px-4 py-2 text-[15px] font-bold bg-[#02FEFB] text-black rounded-md hover:bg-[#FBB03B] transition-colors mt-4">
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}