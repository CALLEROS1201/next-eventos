'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch'; // Asegúrate de que la ruta sea correcta

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 max-w-6xl mx-auto">
      {/* Logo */}
      <Link href="/" className="relative inline-flex items-baseline space-x-1 group cursor-pointer">
        <span className="text-3xl font-bold text-green-500">SERVICE</span>
        <span className="text-2xl font-bold text-gray-500">Link</span>
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {/* Menú - Pantallas grandes */}
      <nav className="hidden md:flex gap-6 text-lg font-medium items-center">
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <Link href="/sign-in" className="hover:text-green-500 transition-colors duration-200">
              Sign in
            </Link>
          </li>
          <li>
            <Link href="/sign-up" className="hover:text-green-500 transition-colors duration-200">
              Sign up
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-green-500 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-500 transition-colors duration-200">
              About
            </Link>
          </li>
        </ul>
        {/* Dark Mode Switch */}
        <DarkModeSwitch />
      </nav>

      {/* Menú hamburguesa - Pantallas pequeñas */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <div className={`space-y-2 ${menuOpen ? '' : ''}`}>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div className={`absolute right-0 top-16 w-48 bg-white shadow-lg p-4 rounded-md ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href="/sign-in" className="hover:text-green-500 transition-colors duration-200">
              Sign in
            </Link>
          </li>
          <li>
            <Link href="/sign-up" className="hover:text-green-500 transition-colors duration-200">
              Sign up
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-green-500 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-500 transition-colors duration-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
