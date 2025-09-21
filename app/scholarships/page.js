// app/(site)/scholarships/page.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const scholarshipsInfo = {
  intro: `Scholarships and Financial Aid opportunities are available for deserving students at UET Mardan. These include freeships, merit-based scholarships and other financial support programs. :contentReference[oaicite:6]{index=6}`,
  types: [
    { name: "Merit Scholarships", description: "Awarded to top-performing students based on academic performance in entrance examinations and internal assessments." },
    { name: "Need-based Financial Aid", description: "For students with financial hardship; requires documentation of financial status." },
    { name: "Freeship Scheme", description: "Available for students who meet criteria related to economic background." },
    { name: "Departmental Scholarships", description: "Scholarships given at department level for outstanding project work/research or extra-curricular contributions." }
  ],
  howToApply: `Students can apply via the Registrar/Financial Aid Office. Application deadlines are announced in notices & prospectus. Supporting documents like previous transcripts, proof of income, etc. are generally required.`
};

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <Navbar/>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-purple-700">Scholarships & Financial Aid</h1>
        <p className="mt-4 text-gray-700">{scholarshipsInfo.intro}</p>
      </motion.header>

      <section className="max-w-4xl mx-auto space-y-12">
        {scholarshipsInfo.types.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-purple-800">{s.name}</h2>
            <p className="mt-2 text-gray-700">{s.description}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-purple-50 rounded-xl p-6 shadow-md border border-purple-200"
        >
          <h2 className="text-2xl font-semibold text-purple-800">How to Apply</h2>
          <p className="mt-2 text-gray-700">{scholarshipsInfo.howToApply}</p>
        </motion.div>
      </section>
    </div>
  );
}
