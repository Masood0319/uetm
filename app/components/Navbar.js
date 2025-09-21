"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-blue-800/95 border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/favicon.ico" 
                alt="UET Mardan Logo" 
                width={64} 
                height={56} 
                className="pr-2"
              />
              <span className="text-white text-xl font-bold tracking-tight">UET Mardan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Admissions', href: 'admissions' },
              { name: 'Academics', href: '/#academics' },
              { name: 'Campus Life', href: '/#student-life' },
              { name: 'Contact', href: 'contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="https://uetmardan.edu.pk/engineering/" 
              className="ml-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800/95">
            {[
              { name: 'Home', href: '/' },
              { name: 'Admissions', href: 'admissions' },
              { name: 'Academics', href: '/#academics' },
              { name: 'About', href: 'about' },
              { name: 'News', href: 'news' },
              { name: 'Campus Life', href: '/#student-life' },
              { name: 'Contact', href: 'contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://uetmardan.edu.pk/engineering/"
              className="block w-full text-center px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply 
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
