// src/pages/departments/Telecom.jsx
"use client";

import DepartmentTemplate from '@/app/components/departments/DepartmentTemplate';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiAward, FiCalendar, FiTool } from 'react-icons/fi';

const TelecomPage = () => {
  const departmentData = {
    title: "Telecommunication Engineering",
    description: "Focused on communication networks, wireless systems, and signal processing. Our department is dedicated to providing cutting-edge education in telecommunications, preparing students for the rapidly evolving field of communication technologies.",
    mission: "To equip students with strong theoretical foundations and practical skills in telecommunication engineering, enabling them to innovate, lead, and address emerging challenges in communication technologies for societal benefit.",
    stats: [
      { label: 'Programs', value: '2+', icon: <FiBookOpen className="w-6 h-6 text-blue-600" /> },
            { label: 'Faculty', value: '12+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
            { label: 'Students', value: '300+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
            { label: 'Established', value: '2012', icon: <FiCalendar className="w-6 h-6 text-blue-600" /> },
            { label: 'Research Papers', value: '45+', icon: <FiAward className="w-6 h-6 text-blue-600" /> },
    ],
    programs: [
      {
        title: "BSc Telecommunication Engineering",
        degree: "Bachelor of Science",
        duration: "4 Years",
        credits: "132-136",
        description: "Comprehensive program covering communication systems, wireless networks, signal processing, and network security. Prepares students for careers in telecommunications and related fields.",
        careerPaths: [
          "Telecom Engineer",
          "Network Engineer",
          "RF Engineer",
          "Telecom Consultant",
          "Research & Development"
        ]
      },
      {
        title: "MSc Telecommunication Engineering",
        degree: "Master of Science",
        duration: "2 Years",
        credits: "30-36",
        description: "Advanced studies in telecommunication systems, focusing on emerging technologies, network design, and research in communication systems.",
        careerPaths: [
          "Senior Telecom Engineer",
          "Network Architect",
          "Research Scientist",
          "Technical Manager",
          "Academia & Research"
        ]
      }
    ],
    peos: [
      "Demonstrate successful careers in telecommunication and related industries through strong technical competence and problem-solving skills.",
      "Pursue lifelong learning, research, and innovation to adapt to evolving communication technologies.",
      "Exhibit leadership, ethics, and effective communication while contributing to society and the engineering profession.",
    ],
    plos: [
      "Engineering Knowledge",
      "Problem Analysis",
      "Design/Development of Solutions",
      "Investigation",
      "Modern Tool Usage",
      "The Engineer and Society",
      "Environment and Sustainability",
      "Ethics",
      "Individual and Team Work",
      "Communication",
      "Project Management",
      "Lifelong Learning",
    ],
    labs: [
      "Communication Systems Lab",
      "Microwave and Antenna Lab",
      "Signal Processing Lab",
      "Networking and Cybersecurity Lab",
      "Optical Communication Lab",
      "Embedded and IoT Lab",
    ],
    faculty: [
      {
        name: "Prof. Dr. Muhammad Khan",
        designation: "Professor & Chairperson",
        qualification: "PhD in Telecommunication Engineering, NUST, Pakistan",
        research: "Wireless Communication, 5G/6G Networks, Signal Processing"
      },
      {
        name: "Dr. Ayesha Ahmed",
        designation: "Associate Professor",
        qualification: "PhD in Communication Systems, UET Peshawar, Pakistan",
        research: "Optical Communication, Fiber Optics, Photonics"
      },
      {
        name: "Engr. Usman Ali",
        designation: "Assistant Professor",
        qualification: "MS in Telecommunication, NUST, Pakistan",
        research: "Wireless Sensor Networks, IoT, Network Security"
      },
      {
        name: "Dr. Farah Riaz",
        designation: "Assistant Professor",
        qualification: "PhD in Electrical Engineering, UET Peshawar, Pakistan",
        research: "Microwave Engineering, Antenna Design, RF Systems"
      }
    ],
    researchAreas: [
      "5G/6G Wireless Communication",
      "Optical Communication & Networks",
      "Wireless Sensor Networks",
      "Network Security & Cryptography",
      "Signal & Image Processing",
      "Internet of Things (IoT)",
      "Satellite Communication"
    ],
    recentPublications: [
      "Khan, M., & Ahmed, A. (2023). 'Performance Analysis of Massive MIMO in 5G Networks.' IEEE Transactions on Wireless Communications.",
      "Ali, U., & Riaz, F. (2023). 'Secure Communication in IoT Networks Using Lightweight Cryptography.' IEEE Internet of Things Journal.",
      "Ahmed, A., et al. (2022). 'Advancements in Optical Fiber Communication: A Comprehensive Review.' Optics Communications.",
      "Riaz, F., & Khan, M. (2022). 'Design and Analysis of Compact MIMO Antenna for 5G Applications.' IEEE Antennas and Wireless Propagation Letters.'"
    ],
    contactInfo: {
      email: "telecom@uetmardan.edu.pk",
      phone: "+92-937-1122334",
      address: "Department of Telecommunication Engineering, UET Mardan, Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan"
    }
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
};

export default TelecomPage;
