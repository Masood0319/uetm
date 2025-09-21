// app/departments/software-engineering/page.jsx

"use client";

import { motion } from 'framer-motion';
import DepartmentTemplate from '../components/departments/DepartmentTemplate';
import { FiBookOpen, FiUsers, FiAward, FiTool, FiGlobe, FiCalendar } from 'react-icons/fi';
import Navbar from '../components/Navbar';

export default function SoftwareEngineeringPage() {
  const departmentData = {
    title: "Computer Software Engineering",
    description: `Software Engineering is the discipline which deals with developing and maintaining software applications by applying technologies and practices from engineering, computer science, project management and other applicable fields. This branch of engineering is the thorough understanding of the entire process from Planning to Design, Development, Testing and Deployment.`,
    stats: [
      { label: "Programs Offered", value: "BSc, MSc, PhD", icon: <FiBookOpen className="w-6 h-6" /> },
      { label: "Established BSc", value: "2002", icon: <FiCalendar className="w-6 h-6" /> },
      { label: "Labs / Facilities", value: "6 labs", icon: <FiTool className="w-6 h-6" /> },
      { label: "Mission Focus", value: "Industry-ready Skills", icon: <FiGlobe className="w-6 h-6" /> },
      { label: "PEOs & PLOs", value: "Defined", icon: <FiAward className="w-6 h-6" /> }
    ],
    programs: {
      undergraduate: {
        title: "BS Computer Software Engineering",
        details: `The Department offers the undergraduate (BSc) Software Engineering program since 2002. It covers software requirements, specification, analysis, design, implementation, verification, deployment, reuse, project management & evolution of software products.`
      },
      postgraduate: [
        "MSc Computer Software Engineering",
        "PhD Computer Software Engineering"
      ]
    },
    faculty: [
      { name: "Dr. Example Professor", designation: "Professor & Chairperson", qualification: "PhD in Computer Science", email: "example@uetmardan.edu.pk" },
      // Add more faculty members here
    ],
    researchAreas: [
      "Software Architecture & Design",
      "Artificial Intelligence & Machine Learning",
      "Data Science & Big Data Analytics",
      "Cloud Computing & Distributed Systems",
      "Software Quality Assurance & Testing"
    ],
    recentPublications: [
      "Recent publication 1",
      "Recent publication 2",
      "Recent publication 3"
    ],
    contactInfo: {
      building: "Software Engineering Block",
      phone: "+92-937-9230295",
      email: "software@uetmardan.edu.pk",
      address: "UET Mardan, Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan"
    },
    mission: `The mission of this program is to equip students with the concepts, techniques, skills and tools for the design & development of medium and large scale software systems. To prepare graduates for professional careers in software industry, academia and research organizations by imparting them life-long learning capabilities.`,
    peos: [
      `Produce graduates who are equipped with sound analytical and problem solving skills; to face and overcome real world challenges particularly indigenous problems; and to contribute to the societal and economic growth of the country.`,
      `Produce graduates having careers in the field of Software Engineering and who are motivated to become researchers, leaders, entrepreneurs, consultants, and successful engineers.`,
      `Produce graduates who are motivated to demonstrate continuous learning and skill development, so as to function and survive in a competitive environment.`
    ],
    plos: [
      "Engineering Knowledge",
      "Problem Analysis",
      "Design / Development of Solutions",
      "Investigation",
      "Modern Tool Usage",
      "The Engineer and Society",
      "Environment and Sustainability",
      "Ethics",
      "Individual and Teamwork",
      "Communication",
      "Project Management",
      "Lifelong Learning"
    ],
    labs: [
      "Programming Lab",
      "Data Science Lab",
      "System & Design Lab",
      "Embedded System Lab",
      "Final Year Project Lab",
      "Postgraduate Lab"
    ]
  };

  return (
    <>
      <Navbar />
      <DepartmentTemplate
        title={departmentData.title}
        description={departmentData.description}
        stats={departmentData.stats}
        programs={departmentData.programs}
        faculty={departmentData.faculty}
        researchAreas={departmentData.researchAreas}
        recentPublications={departmentData.recentPublications}
        contactInfo={departmentData.contactInfo}
        bgColor="from-blue-50 to-white"
        textColor="text-blue-800"
        accentColor="bg-blue-600"
      >
        {/* Custom content that will be rendered in the template */}
        <div className="space-y-8">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Mission Statement</h3>
            <p className="text-blue-800">{departmentData.mission}</p>
          </motion.div>

          {/* PEOs Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Program Educational Objectives (PEOs)</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {departmentData.peos.map((peo, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {peo}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* PLOs Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Program Learning Outcomes (PLOs)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentData.plos.map((plo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <span className="text-blue-600 font-medium mr-2">{index + 1}.</span>
                    <span>{plo}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Labs Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Labs & Facilities</h3>
            <p className="text-gray-700 mb-6">
              There are six state-of-the-art laboratories in the Department, equipped with every instrument and software required in the software engineering courses. For smooth functioning, laboratories are backed up with a powerful generator.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentData.labs.map((lab, index) => (
                <motion.div
                  key={lab}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <FiTool className="text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800">{lab}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </DepartmentTemplate>
    </>
  );
}
