// app/(site)/admissions/apply-engineering/page.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ApplyEngineeringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Banner */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/uetm-campus-admissions.jpg')" // Replace with official UETM campus image
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Apply for Engineering Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl"
          >
            Start your online application for BSc Engineering at UET Mardan for Fall-2025
          </motion.p>
        </div>
      </div>

      {/* Apply Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Online Admissions (Engineering Programs)</h2>
          <p className="text-gray-700 mb-4">
            Admission in BSc Engineering Programs (Fall-2025)
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Online Admission Forms available from <strong>10/07/2025</strong> (Thursday) </li>
            <li>Last date for submission of Online Admission Forms (All categories) <strong>15/08/2025</strong> (Friday) </li>
            <li>Hafiz-e-Quran Test (For Undergraduate Programs only): <strong>16/08/2025</strong> (Saturday) </li>
            <li>Display of candidates' data for correction/rectification of errors & changes in preference: <strong>16/08/2025</strong> (Saturday) </li>
            <li>Display of 1st merit list (Open Merit, Rationalized scheme, and Reserved seats): <strong>17/08/2025</strong> (Sunday) </li>
            <li>Admission/interviews (1st Open Merit, Rationalized scheme, Reserved seats): <strong>18-19/08/2025</strong> (Monday & Tuesday) </li>
            <li>Display of 2nd Open Merit List (Open Merit, Rationalized scheme): <strong>20/08/2025</strong> (Wednesday) </li>
            <li>Admission/interviews (for 2nd list): <strong>21-22/08/2025</strong> (Thursday & Friday) </li>
            <li>Commencement of classes / Orientation: <strong>1st Week of September</strong> </li>
          </ul>
        </motion.div>

        {/* Account Actions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-100 rounded-xl shadow-lg p-8 text-center"
        >
          <p className="text-gray-800 text-lg mb-6">
            New to UET Mardan? <br />
            If you have never applied before, you will need to register an account with a valid email address.
          </p>
          <Link
            href="register"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Register an Account
          </Link>
          <p className="mt-4 text-gray-600">
            Already registered? <br />
            Login using your registered email & password to submit the application form.
          </p>
          <Link
            href="login"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold border border-blue-600 hover:bg-gray-100 transition mt-4"
          >
            Login Here
          </Link>
        </motion.div>

        {/* Payment & Fee Processing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Application Fee & Important Notes</h3>
          <p className="text-gray-700">
            Candidates should deposit the application / prospectus processing fee as prescribed by the Directorate of Admissions. 
          </p>
          <p className="text-gray-700 mt-2">
            Make sure to upload clear scanned copies of required documents while filling the application form. 
          </p>
        </motion.div>
      </section>
    </div>
  );
}
