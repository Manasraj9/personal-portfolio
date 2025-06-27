import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

/* ─────────────────────  SAMPLE DATA  ───────────────────── */
const data = [
  {
    cat: "Web Development",
    items: [
      {
        title: "Portfolio Site",
        desc: "Personal portfolio built with React & Tailwind.",
        tech: ["React", "Tailwind", "Vercel"],
        images: [
          "https://via.placeholder.com/800x450?text=Portfolio+1",
          "https://via.placeholder.com/800x450?text=Portfolio+2",
          "https://via.placeholder.com/800x450?text=Portfolio+3",
        ],
        live: "#",
        repo: "#",
      },
      {
        title: "E‑Commerce Store",
        desc: "Full‑stack MERN shop with Stripe payments.",
        tech: ["Next.js", "MongoDB", "Stripe"],
        images: [
          "https://via.placeholder.com/800x450?text=Shop+1",
          "https://via.placeholder.com/800x450?text=Shop+2",
        ],
        live: "#",
        repo: "#",
      },
      {
        title: "Blog Platform",
        desc: "Markdown blog with Next.js 13 App Router.",
        tech: ["Next.js", "Prisma", "PostgreSQL"],
        images: ["https://via.placeholder.com/800x450?text=Blog"],
      },
      {
        title: "Recipe Hub",
        desc: "Recipe search using Edamam API & caching.",
        tech: ["React", "RapidAPI"],
        images: ["https://via.placeholder.com/800x450?text=Recipes"],
      },
    ],
  },
  {
    cat: "App Development",
    items: [
      {
        title: "Task Tracker",
        desc: "Cross‑platform task app with offline sync.",
        tech: ["Flutter", "Hive"],
        images: [
          "https://via.placeholder.com/800x450?text=Task+1",
          "https://via.placeholder.com/800x450?text=Task+2",
        ],
      },
      {
        title: "FitBuddy",
        desc: "React‑Native workout tracker with charts.",
        tech: ["React Native", "Firebase"],
        images: ["https://via.placeholder.com/800x450?text=FitBuddy"],
      },
    ],
  },
];

/* ─────────────────────  MAIN COMPONENT  ───────────────────── */
export default function Projects() {
  /* carousel state */
  const [catIndex, setCatIndex] = useState(0);
  const [page, setPage] = useState(0);

  /* lightbox state */
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]); // array<string>
  const [modalIdx, setModalIdx] = useState(0);

  const PAGE_SIZE = 3;
  const currentItems = data[catIndex].items;
  const totalPages = Math.ceil(currentItems.length / PAGE_SIZE);
  const sliced = currentItems.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  /* modal auto‑slide every 5 s */
  useEffect(() => {
    if (!showModal || modalImages.length <= 1) return;
    const timer = setInterval(() => {
      setModalIdx((i) => (i + 1) % modalImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [showModal, modalImages]);

  /* category / page helpers */
  const goPrevPage = () => setPage((p) => Math.max(0, p - 1));
  const goNextPage = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const selectCat = (i) => {
    setCatIndex(i);
    setPage(0);
  };

  /* modal helpers */
  const openModal = (imgs) => {
    setModalImages(imgs.slice(0, 5)); // cap at 5
    setModalIdx(0);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const prevImg = () => setModalIdx((i) => (i - 1 + modalImages.length) % modalImages.length);
  const nextImg = () => setModalIdx((i) => (i + 1) % modalImages.length);

  return (
    <section id="projects" className="relative min-h-screen text-white py-16 text-center overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-10">Projects</h1>

      {/* category chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {data.map((c, i) => (
          <button
            key={c.cat}
            onClick={() => selectCat(i)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${i === catIndex ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
          >
            {c.cat}
          </button>
        ))}
      </div>

      {/* project cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        {sliced.map((p) => (
          <div key={p.title} className="group relative bg-white/5 p-4 rounded shadow hover:shadow-lg transition">
            {/* category badge */}
            {/* <span className="absolute top-2 left-2 bg-blue-500 text-xs text-white px-2 py-0.5 rounded-full z-10 shadow-md">
              {data[catIndex].cat}
            </span> */}

            {p.images?.[0] && (
              <img
                src={p.images[0]}
                alt={p.title}
                className="w-full h-40 object-cover rounded mb-4 cursor-pointer"
                onClick={() => openModal(p.images)}
              />
            )}
            {/* <h2 className="text-lg font-semibold mb-2">{p.title}</h2> */}

            <div className="text-sm mb-6">
              {p.desc}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* hover overlay */}
            

            {/* links */}
            <div className="mt-4 flex gap-4 justify-center">
              {p.live && p.live !== "#" && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Live
                </a>
              )}
              {p.repo && p.repo !== "#" && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* pagination (inside section) */}
      {totalPages > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-6 bg-black/90 px-6 py-2 rounded-full">
          <button onClick={goPrevPage} disabled={page === 0} className={`text-2xl ${page === 0 ? "text-white/30" : "text-blue-400 hover:text-white"}`}>
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === page ? "bg-blue-400" : "bg-white/30"}`} />
            ))}
          </div>
          <button onClick={goNextPage} disabled={page === totalPages - 1} className={`text-2xl ${page === totalPages - 1 ? "text-white/30" : "text-blue-400 hover:text-white"}`}>
            <FaChevronRight />
          </button>
        </div>
      )}

      {/* ───────────────  LIGHTBOX MODAL  ─────────────── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center px-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-3xl text-white hover:text-blue-400"
          >
            <FaTimes />
          </button>

          <div className="relative max-w-3xl w-full">
            {/* image */}
            <img
              src={modalImages[modalIdx]}
              alt="project screenshot"
              className="w-full max-h-[70vh] object-contain rounded"
            />

            {/* prev / next buttons */}
            {modalImages.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-white/70 hover:text-white px-4"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-white/70 hover:text-white px-4"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>

          {/* dots */}
          {modalImages.length > 1 && (
            <div className="mt-6 flex gap-2">
              {modalImages.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === modalIdx ? "bg-blue-400" : "bg-white/30"}`} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
