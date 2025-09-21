// app/(site)/news/page.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// Example news (replace with dynamic data from API or DB)
const newsList = [
  {
    title: "Convocation 2025 Announced",
    date: "September 10, 2025",
    desc: "UET Mardan announces its annual convocation for graduating students with distinguished guests and medal distribution.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Research Grant Secured",
    date: "August 28, 2025",
    desc: "Faculty of Electrical Engineering has secured a major research grant in renewable energy solutions.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sports Gala 2025",
    date: "August 15, 2025",
    desc: "The annual sports gala brought together students from across departments showcasing talent in cricket, football, and athletics.",
    img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "MoU with International University",
    date: "July 20, 2025",
    desc: "UET Mardan signed an MoU with an international university to promote joint research and student exchange programs.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold drop-shadow-lg"
          >
            Latest News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg max-w-3xl"
          >
            Stay updated with the latest announcements, research, and events at
            UET Mardan.
          </motion.p>
        </div>
      </div>

      {/* News Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {newsList.map((news, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-52 w-full">
                <img
                  src={news.img}
                  alt={news.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500">{news.date}</p>
                <h2 className="mt-2 text-xl font-bold text-gray-800 hover:text-blue-600 transition">
                  {news.title}
                </h2>
                <p className="mt-3 text-gray-600">{news.desc}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-600 text-white text-center py-16 mt-12"
      >
        <h2 className="text-3xl font-bold">Want to know more?</h2>
        <p className="mt-3 text-lg">Explore events, achievements, and more at UET Mardan.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
          Visit Events Page
        </button>
      </motion.div>
    </div>
  );
}
