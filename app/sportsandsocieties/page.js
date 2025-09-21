// app/(site)/sports-societies/page.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const sportsAndSocieties = {
  intro: `UET Mardan encourages extracurricular engagement through sports and student societies. These provide platforms for leadership, teamwork, and physical well-being.`,
  sports: [
    { name: "Cricket Team", img: "https://www.uetmardan.edu.pk/uetm/assets/sports/sport_6.jpeg" },
    { name: "Football Team", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2wzpfyHvUDcvQnVdMThAIwEZ478ifPA3uw&s" },
    { name: "Badminton Courts", img: "https://www.uetmardan.edu.pk/uetm/assets/sports/sport_12.jpeg" },
    { name: "Indoor Games Facility", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2skgSd9dnrg_xrGyeKpA3AyNV7vvEEHLZU96i0aJj0brP11ZJ6m5N8zlwzo63locBF8&usqp=CAU" },
  ],
  societies: [
    { name: "Debate Society", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80" },
    { name: "Robotics Club", img: "https://lh7-us.googleusercontent.com/nh3gQuTd8QftT2LNvNkC3ZcqgA2fSLk2_LkAbTn8aO3uqRYpFNX9z3RBmD_U8KPru_ByZoKOUmFtFG2y_T_-HI7DU6dVSdbri_0yVnCtoiG71e_CHOYWQPdJa5gGzGCs_XuvEmC9MlE601h8o8CvqQ" },
    { name: "Literary & Cultural Society", img: "https://www.uetmardan.edu.pk/uetm/assets/societies/societies_2.PNG" },
    { name: "Computer Science Students Society", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  ],
  benefitList: [
    "Promoting physical fitness and health",
    "Developing leadership & teamwork skills",
    "Enhancing campus life & student connectivity",
    "Opportunities to participate in inter-university competitions",
  ],
};

export default function SportsSocietiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* ✅ Hero Section with fixed background */}
      <div
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold drop-shadow-lg"
          >
            Sports & Societies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-3xl text-lg"
          >
            {sportsAndSocieties.intro}
          </motion.p>
        </div>
      </div>

      {/* ✅ Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Sports */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8">Sports</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsAndSocieties.sports.map((sp, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={sp.img}
                  alt={sp.name}
                  className="object-cover w-full h-40"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-gray-800">{sp.name}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Societies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-yellow-700 mb-8">Societies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsAndSocieties.societies.map((soc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={soc.img}
                  alt={soc.name}
                  className="object-cover w-full h-40"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-gray-800">{soc.name}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Join */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-50 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Join?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            {sportsAndSocieties.benefitList.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
