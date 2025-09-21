// app/(site)/labs-workshops/page.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function LabsWorkshopsPage() {
  const labsInfo = {
    intro: `UET Mardan has established state-of-the-art laboratories containing the latest equipment. These labs are extensively utilized for laboratory courses, open-ended labs, and research.`,
    labs: [
      { name: "Power Systems Lab", img: "https://www.uetmardan.edu.pk/uetm/assets/labs/lab_5.JPG" },
      { name: "Power Electronics Lab", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK82GoYud6J-QejvVAmwhHfBerar8ioPHtGA&s" },
      { name: "Electrical Machines I & II Labs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeL6umfET6UNps_IEA8tDthDOCq6kQbNbb6A&s" },
      { name: "Digital & Analog Electronics Lab", img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80" },
      { name: "Embedded Systems Lab", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2zsZTXFu280zodtsoPW5CiUc0bYQnKoG_Q&s" },
      { name: "Signal Processing Lab", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bYyQQrPTqttTUOwsoJhrXEbaixPcsJsEEw&s" },
      { name: "Final Year Project Lab", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YXSEs2og9ivh0x60c2VEFDTyXlfPirWTuA&s" },
      { name: "Workshop Technology Lab (Mechanical/Civil)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggc13qA_zijFKbl_6eq0OKvrxpqO7y7vaEA&s" }
    ],
    extra: `For smooth functioning, laboratories are backed up with a 200kVA generator.`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Hero Section with Background */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8p7rDRV9xGlupueMQqCtOdebToUoeuCtZAucElAWXPn6kN99ahaVfRdLajSRdzoSoesU&usqp=CAU" // replace with real UETM lab image
          alt="UETM Labs Background"
          className="absolute inset-0 object-cover w-full h-full brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold drop-shadow-lg"
          >
            Labs & Workshops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-3xl text-lg"
          >
            {labsInfo.intro}
          </motion.p>
        </div>
      </div>

      {/* Labs Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {labsInfo.labs.map((lab, idx) => (
          <motion.div
            key={lab.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
          >
            <div className="relative">
              <img
                src={lab.img}
                alt={lab.name}
                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{lab.name}</h2>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Extra Info */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto px-6 pb-16 text-center text-gray-700"
      >
        <p className="text-lg font-medium">{labsInfo.extra}</p>
      </motion.footer>
    </div>
  );
}
