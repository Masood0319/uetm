// app/(site)/admissions/page.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/uetm-campus-admissions.jpg')" // replace with official UETM campus admissions image
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl"
          >
            Undergraduate & Postgraduate Admission Process, Criteria & Schedules
          </motion.p>
        </div>
      </div>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Introduction / Overview */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Undergraduate Admissions</h2>
          <p className="text-gray-700 leading-relaxed">
            UET Mardan offers admission to both Engineering & Non-Engineering Undergraduate Programs. Applicants must follow the announced schedule, meet eligibility criteria, and submit required documents as per the admission procedure.
          </p>
        </motion.div>

        {/* Eligibility Criteria */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Programs Eligibility Criteria</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Candidates must have passed Intermediate (Pre-Engineering) or equivalent examination with at least **60% unadjusted marks** for BSc Engineering Programs; at least **50%** unadjusted marks for Non-Engineering Programs. 
            </li>
            <li>
              Subject combinations allowed:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Physics, Mathematics, and Chemistry: eligible for all Engineering, BS Computer Science, and BS English. </li>
                <li>Physics, Mathematics, and Computer Studies / Computer Science: eligible similarly. </li>
                <li>Physics, Chemistry, and Biology: eligible only for BS Computer Science and BS English. </li>
                <li>FA: eligible only for BS English. </li>
                <li>DAE (Diploma of Associate Engineer) with ≥ 60% marks for Engineering programs and relevant programs. </li>
                <li>DAE with ≥ 50% marks for BS Computer Science. </li>
              </ul>
            </li>
            <li>
              Candidates awaiting results are also eligible to apply, with appropriate undertakings. 
            </li>
            <li>
              If any information in the application is incorrect or suppressed, admission shall be cancelled. 
            </li>
          </ul>
        </motion.div>

        {/* Application Process & Important Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Application Process</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Fill out the online application form before the deadline.</li>
            <li>Upload required documents including DMCs, certificates, pending results undertakings, domicile, etc.</li>
            <li>Pay the admission/application fee as specified. (Details given in fee structure section.)</li>
            <li>Wait for the issue and display of the Merit List. Follow instructions for document verification/admission confirmation. </li>
            <li>Check Admission Notice, Schedule, and Prospectus for full details. </li>
          </ol>
        </motion.div>

        {/* Fee Structure & Self-Finance / Scholarships Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fee Structure & Scholarships</h3>
          <p className="text-gray-700 mb-2">
            Details of tuition fees, self-finance charges, and any scholarship/fee concession are provided in the prospectus. 
          </p>
          <a
            href="https://www.uetmardan.edu.pk/uetm/assets/prospectous/undergraduate/UG-Porspectus-2024-25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Download Undergraduate Prospectus 2024-25
          </a>
        </motion.div>

        {/* Merit List / Schedule */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Merit List Preparation & Schedule</h3>
          <p className="text-gray-700 leading-relaxed">
            Merit lists are prepared based on eligibility criteria, previous academic performance and other criteria as laid out in the prospectus. The schedule of admissions, notice of admissions, deadlines etc. are announced by the Directorate of Admissions on the official UET Mardan site under “Admission Schedule” & “Admission Notice”. 
          </p>
        </motion.div>

        {/* Postgraduate Admissions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Postgraduate Admissions</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UET Mardan also offers postgraduate admissions (MSc / MS / PhD). Applicants should check the programs, eligibility, fee structure, merit list and admission schedules published for postgraduate admissions. 
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Application process for PG programs is via online portal. </li>
            <li>Eligibility criteria vary by department and program—check the prospectus or program pages. </li>
            <li>Scholarships and fee concessions may be available. </li>
            <li>Merit lists and admission notices are published on the official website. </li>
          </ul>
        </motion.div>

        {/* Important Notices / Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Useful Links & Notices</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/admissions/ug/admission-notice"
                className="text-blue-600 hover:underline"
              >
                Admission Notice
              </a>
            </li>
            <li>
              <a
                href="/admissions/ug/admission-schedule"
                className="text-blue-600 hover:underline"
              >
                Admission Schedule
              </a>
            </li>
            <li>
              <a
                href="/admissions/programs-eligibility"
                className="text-blue-600 hover:underline"
              >
                Programs & Eligibility Criteria
              </a>
            </li>
            <li>
              <a
                href="/admissions/fee-structure"
                className="text-blue-600 hover:underline"
              >
                Fee Structure
              </a>
            </li>
            <li>
              <a
                href="/admissions/prospectus"
                className="text-blue-600 hover:underline"
              >
                Prospectus
              </a>
            </li>
            <li>
              <a
                href="/admissions/scholarships"
                className="text-blue-600 hover:underline"
              >
                Scholarships
              </a>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
