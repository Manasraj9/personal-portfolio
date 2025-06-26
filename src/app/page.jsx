'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-6 shadow-lg">
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-blue-500">Manas Raj</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-300">
            <Typewriter
              words={[
                'CSE Graduate passionate about full-stack development.',
                'Skilled in React, Node.js, Flutter, and Firebase.',
                'Building fast, scalable, and modern applications.',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h2>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black transition px-6 py-2 rounded-full font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-200">
        <div>
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg mt-4">This is the about section of my single-page portfolio.</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div>
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-lg mt-4">This is the projects section of my single-page portfolio.</p>
        </div>
      </section>

      <section id="resume" className="min-h-screen flex items-center justify-center bg-gray-200">
        <div>
          <h1 className="text-4xl font-bold">My Resume</h1>
          <p className="text-lg mt-4">This is the resume section of my single-page portfolio.</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div>
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-lg mt-4">This is the contact section of my single-page portfolio.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
