"use client";

import DepartmentTemplate from '@/app/components/departments/DepartmentTemplate';
import Navbar from '../components/Navbar';
import { FiBookOpen, FiUsers, FiAward, FiCalendar } from 'react-icons/fi';

const MechanicalEngineeringPage = () => {
  const departmentData = {
    title: "Mechanical Engineering",
    description: "Dedicated to excellence in mechanical engineering education and research, preparing students to design, analyze, and manufacture mechanical systems. Our programs combine fundamental engineering principles with hands-on experience in thermal systems, manufacturing, and mechanical design.",
    stats: [
      { label: 'Programs', value: '2+', icon: <FiBookOpen className="w-6 h-6 text-blue-600" /> },
      { label: 'Faculty', value: '12+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
      { label: 'Students', value: '300+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
      { label: 'Established', value: '2012', icon: <FiCalendar className="w-6 h-6 text-blue-600" /> },
      { label: 'Research Papers', value: '45+', icon: <FiAward className="w-6 h-6 text-blue-600" /> },
    ],
    programs: [
      {
        title: "BSc Mechanical Engineering",
        degree: "Bachelor of Science",
        duration: "4 Years",
        credits: "136-140",
        description: "Comprehensive program covering thermodynamics, fluid mechanics, manufacturing processes, and mechanical design. Prepares students for diverse careers in mechanical engineering.",
        careerPaths: [
          "Mechanical Design Engineer",
          "Manufacturing Engineer",
          "Thermal Systems Engineer",
          "Project Engineer",
          "Maintenance Engineer"
        ]
      },
      {
        title: "MSc Mechanical Engineering",
        degree: "Master of Science",
        duration: "2 Years",
        credits: "30-36",
        description: "Advanced studies in specialized areas of mechanical engineering including thermal systems, manufacturing, and mechanical design. Focuses on research and innovation.",
        careerPaths: [
          "Senior Mechanical Engineer",
          "Research & Development Engineer",
          "Project Manager",
          "Technical Consultant",
          "Academia & Research"
        ]
      }
    ],
    faculty: [
      {
        name: "Dr. Muhammad Usman",
        designation: "Professor & Head of Department",
        qualification: "PhD in Mechanical Engineering, UET Peshawar, Pakistan",
        research: "Thermal Engineering, Heat Transfer, Energy Systems"
      },
      {
        name: "Dr. Ali Raza Khan",
        designation: "Associate Professor",
        qualification: "PhD in Manufacturing Engineering, NUST, Pakistan",
        research: "Advanced Manufacturing, CAD/CAM, Industry 4.0"
      },
      {
        name: "Engr. Farhan Ahmad",
        designation: "Assistant Professor",
        qualification: "MS in Mechanical Design, UET Peshawar, Pakistan",
        research: "Finite Element Analysis, Machine Design, Vibration Analysis"
      },
      {
        name: "Dr. Sana Fatima",
        designation: "Assistant Professor",
        qualification: "PhD in Thermal Engineering, UET Peshawar, Pakistan",
        research: "Renewable Energy, HVAC Systems, Computational Fluid Dynamics"
      },
      {
        name: "Engr. Usman Ali",
        designation: "Lecturer",
        qualification: "MS in Industrial Engineering, NUST, Pakistan",
        research: "Operations Research, Supply Chain Management, Quality Control"
      }
    ],
    researchAreas: [
      "Thermal & Fluid Systems",
      "Advanced Manufacturing Technologies",
      "Mechanical Design & Analysis",
      "Mechatronics & Control Systems",
      "Energy & Environment",
      "Industrial Engineering",
      "Robotics & Automation"
    ],
    recentPublications: [
      "Usman, M., & Khan, A. R. (2023). 'Performance Analysis of Solar Thermal Collectors with Different Absorber Coatings.' Renewable Energy.",
      "Ahmad, F., & Fatima, S. (2023). 'Finite Element Analysis of Composite Materials for Automotive Applications.' Journal of Materials Engineering.",
      "Khan, A. R., et al. (2022). 'Additive Manufacturing of Lightweight Structures: A Review.' International Journal of Advanced Manufacturing Technology.",
      "Fatima, S., & Usman, M. (2022). 'Computational Analysis of Heat Transfer Enhancement in Microchannel Heat Sinks.' International Journal of Heat and Mass Transfer.'"
    ],
    contactInfo: {
      email: "mechanical@uetmardan.edu.pk",
      phone: "+92-937-9234571",
      address: "Department of Mechanical Engineering, UET Mardan, Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan"
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
      />
    </>
  );
};

export default MechanicalEngineeringPage;
