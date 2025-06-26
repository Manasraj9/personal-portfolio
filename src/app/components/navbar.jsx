'use client'
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaFolderOpen, FaFileAlt, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex items-center bg-gray-800 p-5 max-h-20">
      <span className="font-bold text-3xl min-w-30 text-white">My Portfolio</span>
      <div className="flex flex-grow justify-end space-x-6 space-y-1 font-bold text-lg">       
          <Link href="#home" className="navlink flex items-center">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link href="#about" className="navlink flex items-center">
            <FaInfoCircle className="mr-1" /> About
          </Link>
          <Link href="#projects" className=" navlink flex items-center">
            <FaFolderOpen className="mr-1" /> Projects
          </Link>
          <Link href="#projects" className=" navlink flex items-center">
            <FaFolderOpen className="mr-1" /> Expereience
          </Link>
          <Link href="#contact" className=" navlink flex items-center">
            <FaEnvelope className="mr-1" /> Contact
          </Link>
        
      </div>
    </nav>
  );
}