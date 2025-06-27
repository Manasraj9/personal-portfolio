'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaInfoCircle, FaFolderOpen, FaFileAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { SiHyperskill } from "react-icons/si";
import { PiProjectorScreenChartFill } from "react-icons/pi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hidden md:flex items-center justify-between bg-gray-800 px-8 py-4">
      <span className="hidden md:block font-bold text-3xl min-w-30 text-white">My Portfolio</span>

      {/* Mobile floating navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 shadow-lg z-50">
        <div className="flex justify-around items-center p-2">
          <Link href="#home" className="navlink flex flex-col items-center p-2">
            <FaHome className="text-lg" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="#about" className="navlink flex flex-col items-center p-2">
            <FaInfoCircle className="text-lg" />
            <span className="text-xs mt-1">About</span>
          </Link>
          <Link href="#skills" className="navlink flex flex-col items-center p-2">
            <SiHyperskill className="text-lg" />
            <span className="text-xs mt-1">Skills</span>
          </Link>
          <Link href="#projects" className="navlink flex flex-col items-center p-2">
            <PiProjectorScreenChartFill className="text-lg" />
            <span className="text-xs mt-1">Projects</span>
          </Link>
          <Link href="#contact" className="navlink flex flex-col items-center p-2">
            <FaEnvelope className="text-lg" />
            <span className="text-xs mt-1">Contact</span>
          </Link>
        </div>
      </div>

      {/* Desktop navigation links */}
      <div className="hidden md:flex md:flex-grow items-center justify-between md:justify-end md:space-x-6 md:space-y-1 font-bold text-lg">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link href="#home" className="navlink flex items-center" onClick={toggleMenu}>
            <FaHome className="mr-1" /> Home
          </Link>
          <Link href="#about" className="navlink flex items-center" onClick={toggleMenu}>
            <FaInfoCircle className="mr-1" /> About
          </Link>
          <Link href="#skills" className="navlink flex items-center" onClick={toggleMenu}>
            <SiHyperskill className="mr-1" /> Skills
          </Link>
          <Link href="#projects" className="navlink flex items-center" onClick={toggleMenu}>
            <PiProjectorScreenChartFill className="mr-1" /> Projects
          </Link>
      {/* <Link href="#experiences" className="navlink flex items-center" onClick={toggleMenu}>
            <FaFolderOpen className="mr-1" /> Experience
        Link> */}
          <Link href="#contact" className="navlink flex items-center" onClick={toggleMenu}>
            <FaEnvelope className="mr-1" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}