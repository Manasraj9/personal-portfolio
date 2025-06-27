'use client'
import Image from "next/image";
import profilePic from "/public/images/profile.jpeg";
import About from "/public/images/About.png"; // Correct way to import with next/image // Correct way to import with next/image
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./components/Projects";
import { Typewriter } from 'react-simple-typewriter'
import Skillsbadge from './components/skillbadges';
import Contact from './components/Contact_us'
import { useState } from 'react';


export default function Home() {

  return (
    <div>
      <Navbar />

      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-6 shadow-lg text-center md:text-left">
        <div className="text-center md:text-left space-y-6 max-w-2xl md:ml-20 lg:ml-40">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-blue-500">Manas Raj</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-300 ">
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

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
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
        <div className="mt-8 md:mt-0 md:mr-20 lg:mr-40">
          <Image src={profilePic} alt="profile" width={400} height={400} className="rounded-full border border-white/30 shadow-lg shadow-black" />
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between backdrop-blur-md bg-white/15 border border-white/30 rounded-xl p-6 shadow-lg text-center md:text-left"
      >
        {/* ──────── Left Side: Text ──────── */}
        <div className="text-center md:text-left space-y-6 max-w-2xl md:ml-20 lg:ml-40">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
          I’m a full‑stack developer with a B.Tech in Computer Science,
          passionate about building high-quality, scalable web and mobile
          applications. My core stack includes React, Next.js, Node.js,
          Flutter, and Firebase. I focus on creating efficient solutions with
          clean, maintainable code.
        </p>
        <div className="pt-4">
          <a
            href="/Manas_Raj_9155557919.pdf" // Assuming resume.pdf is in the public folder
            download
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full font-medium text-white"
          >
            Download Resume
          </a>
        </div>
        </div>

        {/* ──────── Right Side: Image ──────── */}
        <div className="mt-12 md:mt-0 md:mr-20 lg:mr-40">
          <Image
            src={About}
            alt="Manas Raj"
            width={400}
            height={400}
          />
        </div>
      </section>

      <section id="skills" className="min-h-screen backdrop-blur-md bg-white/10 border border-white/30">
        <div className="w-full ">
          <Skillsbadge />
        </div>
        
      </section>

     

      <section id="projects" className="min-h-screen backdrop-blur-md bg-white/15 border border-white/30 rounded-xl p-6 shadow-lg ">
         <Projects />
      </section>

      <section id="contact" className="min-h-screen backdrop-blur-md bg-white/10 border border-white/30">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
