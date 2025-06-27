'use client'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 p-4 text-center text-white text-sm">
      <p>&copy; {new Date().getFullYear()} Manas Raj. All rights reserved.</p>
    </footer>
  );
}