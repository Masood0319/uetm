// app/(site)/contact/page.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const contacts = [
  { role: "Vice Chancellor", email: "vc@uetmardan.edu.pk", phone: null },
  { role: "Pro Vice Chancellor", email: "provc@uetmardan.edu.pk", phone: null },
  { role: "Registrar", email: "Registrar@uetmardan.edu.pk", phone: "+92-937-9230295 / +92-937-9230296" },
  { role: "Dean", email: "dean@uetmardan.edu.pk", phone: "+92-937-9230449" },
  { role: "Director Planning & Development", email: "dir.pnd@uetmardan.edu.pk", phone: "+92-937-920450" },
  { role: "Director Admissions", email: "admissions@uetmardan.edu.pk", phone: "+92-937-9230141" },
  { role: "Directorate Works", email: null, phone: "+92-937-9230069" },
  { role: "Controller of Examinations", email: "controller@uetmardan.edu.pk", phone: "+92-937-9230249" },
  { role: "Chairman, Department of Computer Software Engineering", email: "chair.se@uetmardan.edu.pk", phone: null },
  { role: "Chairman, Department of Electrical Engineering", email: "chair.ee@uetmardan.edu.pk", phone: null },
  { role: "Chairman, Department of Telecommunication Engineering", email: "chair.te@uetmardan.edu.pk", phone: null },
  { role: "Chairman, Department of Computer Science", email: "chair.cs@uetmardan.edu.pk", phone: null },
  { role: "Warden, Ahmad Shah Abdali Boys Hostel", email: null, phone: "+92-937-" /* incomplete at source */ },
  { role: "Warden, Ayesha Girls Hostel", email: null, phone: "+92-937-9230236" },
  { role: "Directorate of Sports", email: "sports@uetmardan.edu.pk", phone: null },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
      {/* Hero / Banner */}
      <div
        className="relative h-64 md:h-80 lg:h-[40vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact-banner.jpg')" /* you can replace with an official UETM contact-related image or stock photo */
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
          >
            Contact UET Mardan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Reach out to the university offices and departments via email or phone.
          </motion.p>
        </div>
      </div>

      {/* Contact Details */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">University Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contacts.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">{c.role}</h3>
                {c.email && (
                  <p className="mt-2 text-gray-700">
                    <strong>Email:</strong> <a href={`mailto:${c.email}`} className="text-blue-600 hover:underline">{c.email}</a>
                  </p>
                )}
                {c.phone && (
                  <p className="mt-2 text-gray-700">
                    <strong>Phone:</strong> {c.phone}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* General University Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-100"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Campus Location & Info</h2>
          <p className="text-gray-700 leading-relaxed">
            University of Engineering & Technology Mardan (UET Mardan) was established on 7th March, 2018 by the Government of
            Khyber Pakhtunkhwa under the KP Universities Act. The University Campus is situated on main Charsadda Road, 23200
            Mardan, Khyber Pakhtunkhwa, Pakistan.
          </p>
          <p className="mt-4 text-gray-700">
            For general enquiries, please feel free to contact via email <a href="mailto:info@uetmardan.edu.pk" className="text-blue-600 hover:underline">info@uetmardan.edu.pk</a> or by phone +92-937-9230295 / +92-937-9230296.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
