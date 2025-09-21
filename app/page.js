"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
/**
 * UET Mardan — Three distinct homepage layouts with tasteful animations
 * Tech: Next.js (app router friendly), TailwindCSS only. No framer-motion.
 * Animations: CSS keyframes + IntersectionObserver to add reveal classes on scroll.
 *
 * How to use:
 * 1) Ensure Tailwind is set up in your Next.js project.
 * 2) Drop this file in app/(site)/page.tsx or any route and export the layout you like.
 * 3) Replace dummy images with campus shots, update links as needed.
 * 4) If you want to switch at runtime, keep the default export <UETMardanHomeShowcase/>.
 */

/****************************\
|* Mini animation framework *|
\****************************/
const useRevealOnScroll = (selector) => {
  const initRef = useRef(false);
  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-in");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
};

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`reveal ${className}`}>{children}</section>
);

/*********************\
|* Shared utilities  *|
\*********************/
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-blue-800/95 border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="favicon.ico" alt="UET Mardan Logo" className="w-22 h-20 pr-2" />
              <span className="text-white text-2xl font-bold  tracking-tight">UET Mardan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Admissions', href: 'admissions' },
              { name: 'Academics', href: '#academics' },
              { name: 'About', href: 'about' },
              { name: 'News', href: 'news' },
              { name: 'Campus Life', href: '#student-life' },
              { name: 'Message from Vice Chancellor', href: 'contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-semibold font-medium text-white hover:bg-blue-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

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
              { name: 'Admissions', href: 'admissions' },
              { name: 'Academics', href: '#academics' },
              { name: 'News', href: 'news' },
              { name: 'Campus Life', href: '#student-life' },
              { name: 'Message from Vice Chancellor', href: 'contact' }
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

          </div>
        </div>
      )}
    </div>
  );
};

const Footer = () => (
  <footer id="contact" className="mt-20 border-t text-white bg-blue-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <h3 className="font-semibold mb-3">UET Mardan</h3>
        <p className="text-white">Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan</p>
        <p className="mt-2 text-white">Phone: +92-937-xxxxxx</p>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-white">
          <li><Link href="admissions" className="hover:underline">Admissions</Link></li>
          <li><Link href="cs" className="hover:underline">Faculty — CS</Link></li>
          <li><Link href="electrical" className="hover:underline">Faculty — Electrical</Link></li>
          <li><Link href="civil" className="hover:underline">Faculty — Mechanical</Link></li>
          <li><Link href="civil" className="hover:underline">Faculty — Software</Link></li>
          <li><Link href="civil" className="hover:underline">Faculty — Telecom</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Social</h3>
        <ul className="space-y-2 text-white">
          <li><Link href="https://www.facebook.com/UetMardan2/" className="hover:underline">Facebook</Link></li>
          <li><Link href="https://www.instagram.com/uetmofficial/" className="hover:underline">Instagram</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Newsletter</h3>
        <form className="flex gap-2">
          <input placeholder="Your email" className="flex-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:brightness-110 transition">Join</button>
        </form>
      </div>
    </div>
  </footer>
);

// Department images mapping with professional stock photos
const departmentImages = {
  "Electrical Engineering": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "Computer Software Engineering": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "Telecommunication Engineering": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "Computer Science": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "Mechanical Engineering": "https://images.unsplash.com/photo-1581093057307-1ec1f8b0d3a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "Civil Engineering": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "Natural Sciences & Humanities": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "Center of Artificial Intelligence": "https://images.unsplash.com/photo-1677442135207-c5d58ffd2b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
};

const departments = [
  { name: "Electrical Engineering", href: "electrical" },
  { name: "Computer Software Engineering", href: "software" },
  { name: "Telecommunication Engineering", href: "telecom" },
  { name: "Computer Science", href: "cs" },
  { name: "Mechanical Engineering", href: "mechanical" },
  { name: "Civil Engineering", href: "civil" },
  { name: "Natural Sciences & Humanities", href: "nsh" },
  { name: "Center of Artificial Intelligence", href: "ai" },
];

const newsItems = [
  { title: "MS/MSc Merit List (Fall 2025)", href: "https://www.uetmardan.edu.pk/uetm/" },
  { title: "Undergrad Admissions (Engineering) — Last date Aug 15, 2025", href: "https://uetmardan.edu.pk/engineering/" },
  { title: "PG Admissions — Schedule & Test Dates", href: "https://uetmardan.edu.pk/pgadmissions/" },
];

/**********************\
|* Layout A — Classic *|
\**********************/
export const HomeClassic = () => {
  useRevealOnScroll(".reveal");
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-50/30 to-slate-300">
      <Nav />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Shaping Engineers & Innovators for Pakistan
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-xl">
                A public-sector university in Khyber Pakhtunkhwa offering PEC-recognized engineering programs and modern computing degrees.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#admissions" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:translate-y-[-2px] active:translate-y-0 transition-transform">Explore Admissions</Link>
                <Link href="#academics" className="px-5 py-3 rounded-xl border hover:bg-white/60 backdrop-blur transition">Departments</Link>
              </div>
            </div>
            <div className="reveal">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img alt="Campus" src="/campus.png" className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 ring-1 ring-black/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Admissions Ticker */}
      <div id="admissions" className="reveal">
        <div className="w-full overflow-hidden bg-blue-600 text-white py-3">
          <div className="marquee whitespace-nowrap">
            {newsItems.map((n, i) => (
              <Link key={i} href={n.href} className="mx-8 inline-block hover:underline">
                {n.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Academics grid */}
      <Section id="academics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Academics</h2>
        <p className="text-gray-700 mt-2 max-w-2xl">Explore our engineering and computing departments.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group rounded-2xl border p-5 bg-cover bg-center hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden h-48 flex flex-col justify-end reveal"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${departmentImages[d.name]})`,
              }}
            >
              <h3 className="font-semibold text-white relative z-10">{d.name}</h3>
              <p className="text-sm text-blue-200 mt-1 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </Section>

      {/* Campus Life */}
      <Section id="student-life" className="mb-20 scroll-mt-24">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 relative">
          Student Life
          <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform -translate-x-1/2"></span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Sports & Societies */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="relative rounded-3xl overflow-hidden shadow-lg group h-72 bg-gray-100"
          >
            <img
              src="https://www.uetmardan.edu.pk/uetm/assets/frontend/images/slider/society.jpg"
              alt="Sports and Societies"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent p-6 flex flex-col justify-end text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Sports & Societies</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Join diverse student clubs, cultural societies, and exciting sports activities.
              </p>
              <a
                href="/sportsandsocieties"
                className="inline-flex items-center px-5 py-2 bg-white/90 text-blue-900 rounded-full font-semibold hover:bg-white shadow-md transition transform hover:-translate-y-0.5"
              >
                View All
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Labs & Workshops */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="relative rounded-3xl overflow-hidden shadow-lg group h-72 bg-gray-100"
          >
            <img
              src="https://www.uetmardan.edu.pk/uetm/assets/frontend/images/slider/lab.jpg"
              alt="Labs and Workshops"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-700/70 to-transparent p-6 flex flex-col justify-end text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Labs & Workshops</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-4">
                Hands-on learning in modern labs with advanced equipment and research opportunities.
              </p>
              <a
                href="/labs"
                className="inline-flex items-center px-5 py-2 bg-white/90 text-indigo-900 rounded-full font-semibold hover:bg-white shadow-md transition transform hover:-translate-y-0.5"
              >
                Explore Labs
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-7 7m7-7l-7-7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Scholarships */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="relative rounded-3xl overflow-hidden shadow-lg group h-72 bg-gray-100"
          >
            <img
              src="https://www.uetmardan.edu.pk/uetm/assets/frontend/images/slider/scholarship.jpg"
              alt="Scholarships"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-700/70 to-transparent p-6 flex flex-col justify-end text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Scholarships</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                Access need-based and merit scholarships to support your academic journey.
              </p>
              <a
                href="/scholarships"
                className="inline-flex items-center px-5 py-2 bg-white/90 text-green-900 rounded-full font-semibold hover:bg-white shadow-md transition transform hover:-translate-y-0.5"
              >
                View Scholarships
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Section>
      <Footer />
    </main>
  );
};

/**************************\
|* Layout B — Magazine UX *|
\**************************/
export const HomeMagazine = () => {
  useRevealOnScroll(".reveal");
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden group relative reveal">
            <img src="/hero-1.jpg" alt="Students" className="w-full h-[420px] object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h1 className="text-3xl md:text-5xl font-extrabold">Admissions Fall 2025</h1>
              <p className="opacity-90 mt-2 max-w-2xl">Undergraduate Engineering & Advanced Tech Programs. Apply before deadlines.</p>
              <div className="mt-4 flex gap-3">
                <Link href="https://uetmardan.edu.pk/engineering/" className="px-4 py-2 rounded-xl bg-white text-gray-900">Engineering</Link>
                <Link href="https://uetmardan.edu.pk/ugadmissions/" className="px-4 py-2 rounded-xl border border-white text-white">Non-Engg</Link>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {newsItems.map((n, i) => (
              <Link key={i} href={n.href} className="rounded-3xl border p-6 hover:shadow-xl transition reveal">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Click for details</p>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <Section id="academics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Departments</h2>
          <div className="flex gap-2 text-sm">
            <button className="px-3 py-1 rounded-full border">Undergrad</button>
            <button className="px-3 py-1 rounded-full border">Postgrad</button>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((d) => (
            <Link key={d.name} href={d.href} className="group rounded-2xl border p-5 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white transition reveal">
              <div className="h-20 rounded-xl bg-gray-100 group-hover:bg-blue-100 transition" />
              <h3 className="font-semibold mt-3">{d.name}</h3>
              <span className="text-xs text-blue-700">Read more →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="life" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="reveal">
            <h3 className="text-2xl font-bold">Why UET Mardan</h3>
            <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
              <li>PEC-recognized engineering programs</li>
              <li>Strong faculty and modern labs</li>
              <li>Scholarships and need-based aid</li>
              <li>Active student societies and sports</li>
            </ul>
          </div>
          <div className="reveal rounded-3xl overflow-hidden shadow-lg">
            <img src="/hero-2.jpg" alt="Campus life" className="w-full h-[320px] object-cover" />
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

/*********************************\
|* Layout C — Split Sidebar App  *|
\*********************************/
export const HomeSplitSidebar = () => {
  useRevealOnScroll(".reveal");
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="md:grid md:grid-cols-[280px,1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block min-h-screen border-r sticky top-0 p-6 bg-white">
          <Link href="/" className="block font-extrabold text-2xl mb-6">UET Mardan</Link>
          <nav className="space-y-2 text-sm">
            <a href="#admissions" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Admissions</a>
            <a href="#academics" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Departments</a>
            <a href="#news" className="block px-3 py-2 rounded-lg hover:bg-gray-100">News</a>
            <a href="#life" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Campus Life</a>
            <a href="#contact" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Contact</a>
          </nav>
          <div className="mt-6 p-3 rounded-xl bg-blue-50 border text-sm">
            <p className="font-semibold">Deadlines</p>
            <p>Undergrad: Aug 15, 2025</p>
            <p>PG: Aug 15–21, 2025</p>
          </div>
          <Link href="https://uetmardan.edu.pk/engineering/" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-xl bg-blue-600 text-white">Apply Now</Link>
        </aside>

        {/* Main */}
        <div>
          <Nav />

          <header className="px-4 sm:px-6 lg:px-8 pt-10 reveal">
            <div className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-blue-600 to-blue-400 text-white">
              <img src="/hero-3.jpg" alt="Building" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="relative p-10">
                <h1 className="text-4xl font-extrabold">University of Engineering & Technology, Mardan</h1>
                <p className="mt-3 text-blue-50 max-w-2xl">Modern engineering & technology education in KP with strong research and community impact.</p>
                <div className="mt-5 flex gap-3">
                  <a href="#academics" className="px-4 py-2 rounded-xl bg-white text-gray-900">Explore Departments</a>
                  <Link href="https://www.uetmardan.edu.pk/uetm/Admissions" className="px-4 py-2 rounded-xl border border-white">All Admissions</Link>
                </div>
              </div>
            </div>
          </header>

          <Section id="admissions" className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid md:grid-cols-3 gap-6">
              {newsItems.map((n, i) => (
                <Link key={i} href={n.href} className="reveal rounded-2xl border bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <h3 className="font-semibold">{n.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Details inside</p>
                </Link>
              ))}
            </div>
          </Section>

          <Section id="academics" className="px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-2xl font-bold">Departments</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {departments.map((d) => (
                <Link key={d.name} href={d.href} className="group reveal rounded-xl p-5 bg-white border hover:shadow-xl transition">
                  <div className="h-16 rounded-lg bg-gradient-to-r from-blue-100 to-white group-hover:from-blue-200" />
                  <div className="mt-3 font-medium">{d.name}</div>
                  <div className="text-xs text-gray-500">Open page →</div>
                </Link>
              ))}
            </div>
          </Section>




          <Footer />
        </div>
      </div>
    </main>
  );
};

/****************************************\
|* Default export — switcher for demos   *|
\****************************************/
export default HomeClassic;

/****************\
|* CSS via JSX  *|
\****************/
const StyleTag = () => (
  <style jsx global>{`
    /* Reveal animations */
    .reveal { opacity: 0; transform: translateY(12px); transition: opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1); }
    .reveal-in { opacity: 1 !important; transform: translateY(0) !important; }

    /* Simple marquee */
    .marquee { display: inline-block; min-width: 100%; animation: slide 18s linear infinite; }
    @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  `}</style>
);
