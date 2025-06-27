import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ───────────────────────────  DATA  ──────────────────────────── */
// Three specialised slides: Front‑end, Back‑end, DevOps.
// Icons are fetched from Devicon CDN so no local assets needed.
const categories = [
  {
    title: "Front-end",
    desc: "Client-side technologies for interactive and responsive UI development.",
    skills: [
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 85 },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 88 },
      { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
      { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 80 },
      { name: "Angular.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", level: 45 },
      { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 65 },
      { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", level: 65 },
      { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 85 },
      { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", level: 70 }
    ]
  },
  {
    title: "Back-end",
    desc: "Server-side logic, databases, and API development.",
    skills: [
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85 },
      { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 75 },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 85 },
      { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 65 },
      { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 65 },
      { name: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: 45 },
      { name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", level: 65 },
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 70 },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 70 },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 70 },
      { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 65 },
      { name: "Supabase", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/null/external-supabase-a-open-source-firebase-alternative-logo-color-tal-revivo.png", level: 65 }
    ]
  },
  {
    title: "DevOps",
    desc: "Deployment, cloud services, CI/CD, and automation.",
    skills: [
      { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 90 },
      { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 65 },
      { name: "GitHub Actions", img: "https://img.icons8.com/color/96/github.png", level: 65 },
      { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", level: 45 },
      { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: 45 }
    ]
  },
  {
    title: "Data Analytics",
    desc: "Python-based data analysis and visualization tools.",
    skills: [
      { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", level: 65 },
      { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", level: 65 },
      { name: "Matplotlib", img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", level: 45 },
      { name: "Seaborn", img: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg", level: 45 },
      { name: "Power BI", img: "https://img.icons8.com/color/96/power-bi.png", level: 65 },
      { name: "Tableau", img: "https://img.icons8.com/color/96/tableau-software.png", level: 65 }
    ]
  },
  {
    title: "Tools & Platforms",
    desc: "Design, collaboration, and productivity tools.",
    skills: [
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 65 },
      { name: "Canva", img: "https://img.icons8.com/color/96/canva.png", level: 65 },
      { name: "WordPress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", level: 65 },
      { name: "Postman", img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/null/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png", level: 85 },
      { name: "Unity", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", level: 45 },
      { name: "Adobe Illustrator", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", level: 45 },
      { name: "Microsoft Office", img: "https://img.icons8.com/color/96/microsoft-office-2019.png", level: 75 }
    ]
  }
];

/* ───────────────────────────  MAIN COMPONENT  ──────────────────────────── */
export default function SkillsSlider() {
  const [index, setIndex] = useState(0);

  // Auto‑advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev - 1 + categories.length) % categories.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % categories.length);

  const current = categories[index];

  return (
    <section className="text-white py-5 text-center select-none">
      {/* ─── Section heading ─── */}
      <h2 className="text-5xl font-bold text-blue-500 mb-6">Skills</h2>

      {/* ─── Category title & description ─── */}
      <h3 className="text-2xl font-semibold mb-2 text-white-300">{current.title}</h3>
      <p className="text-gray-400 mb-8">{current.desc}</p>

      {/* ─── Skills grid ─── */}
      <div className="relative max-w-6xl mx-auto ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center transition-opacity duration-300 min-h-screen/2">
          {current.skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-white/5 p-4 rounded shadow w-full flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-12 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
              />
              <span className="text-sm font-medium">{skill.name}</span>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-yellow-400 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-20">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        {/* ─── Navigation & pagination ─── */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-8 z-50">
          <button onClick={prevSlide} aria-label="Previous" className="text-blue-500 hover:text-white text-2xl">
            <FaChevronLeft />
          </button>

          {/* Pagination dots */}
          <div className="flex gap-2">
            {categories.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                  i === index ? "bg-blue-500" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} aria-label="Next" className="text-blue-500 hover:text-white text-2xl">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
