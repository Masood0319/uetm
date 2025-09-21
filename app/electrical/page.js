// app/(site)/departments/electrical-engineering/page.jsx
"use client";

import DepartmentTemplate from '@/app/components/departments/DepartmentTemplate';
import Navbar from '@/app/components/Navbar';
import { FiBookOpen, FiUsers, FiAward, FiCalendar } from 'react-icons/fi';

const ElectricalEngineeringPage = () => {
  const departmentData = {
    title: "Department of Electrical Engineering",
    description:
      "The Department of Electrical Engineering at UET Mardan is committed to providing quality education and producing competent engineers with expertise in power, electronics, communication, and control systems. The department emphasizes research, innovation, and industry collaboration to prepare graduates for global challenges.",
    stats: [
      { label: 'Programs', value: '2', icon: <FiBookOpen className="w-6 h-6 text-blue-600" /> },
      { label: 'Faculty', value: '17+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
      { label: 'Students', value: '300+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
      { label: 'Established', value: '2012', icon: <FiCalendar className="w-6 h-6 text-blue-600" /> },
      { label: 'Research Papers', value: '40+', icon: <FiAward className="w-6 h-6 text-blue-600" /> },
    ],
    programs: [
      {
        title: "BSc Electrical Engineering",
        degree: "Bachelor of Science",
        duration: "4 Years",
        credits: "134–138",
        description:
          "The BSc Electrical Engineering program equips students with a solid foundation in power systems, electronics, control systems, and communication technologies. The curriculum integrates theoretical learning with hands-on labs and projects, preparing students for careers in diverse industries.",
        careerPaths: [
          "Power Systems Engineer",
          "Electronics Engineer",
          "Control Systems Engineer",
          "Telecommunications Engineer",
          "Research & Development"
        ]
      },
      {
        title: "MSc Electrical Engineering",
        degree: "Master of Science",
        duration: "2 Years",
        credits: "30–36",
        description:
          "The MSc Electrical Engineering program focuses on advanced knowledge and research in specialized areas including renewable energy, smart grids, control, and wireless communication. Graduates are prepared for leadership roles in academia, research, and industry.",
        careerPaths: [
          "Senior Electrical Engineer",
          "Research Scientist",
          "Project Manager",
          "Technical Consultant",
          "Academia & Research"
        ]
      }
    ],
    faculty: [
      {
        name: "Prof. Dr. Imran Khan",
        designation: "Chairman",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Dr. Fazal Muhammad",
        designation: "Associate Professor / Semester Coordinator",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Dr. Gul Rukh",
        designation: "Assistant Professor",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Dr. Haseeb Ahmad Khan",
        designation: "Assistant Professor",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Dr. Ajmal Farooq",
        designation: "Assistant Professor / OBE Coordinator",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Dr. Irfan Khan",
        designation: "Lecturer",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Sadia Jabeen Siddiqi",
        designation: "Lecturer (Study Leave)",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Mahum Pervez",
        designation: "Lecturer (Study Leave)",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Hamza Ahmad",
        designation: "Lecturer (Study Leave)",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Dr. Shayan Tariq Jan",
        designation: "Lecturer",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Zaid Yousaf",
        designation: "Lecturer",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Abdullah Farman",
        designation: "Lecturer / FYP Coordinator",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Mian Muhammad Amir Ayaz",
        designation: "Lecturer",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Nasar Iqbal",
        designation: "Lab Engineer (Study Leave)",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Syed Abuzar Bacha",
        designation: "Lab Engineer (Study Leave)",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Engr. Hassan Wasim Khan",
        designation: "Lab Engineer",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      },
      {
        name: "Muhammad Arif",
        designation: "Teaching Assistant",
        photo: "https://www.uetmardan.edu.pk/uetm/assets/frontend/images/placeholder.png"
      }
    ],
    researchAreas: [
      "Renewable Energy Systems",
      "Power Electronics & Drives",
      "Control Systems & Automation",
      "Wireless Communication",
      "Embedded Systems & IoT",
      "Smart Grid Technologies"
    ],
    contactInfo: {
      email: "electrical@uetmardan.edu.pk",
      phone: "+92-937-9230296",
      address:
        "Department of Electrical Engineering, University of Engineering and Technology Mardan, Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan"
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
        contactInfo={departmentData.contactInfo}
        bgColor="from-blue-50 to-white"
        textColor="text-blue-800"
        accentColor="bg-blue-600"
      />
    </>
  );
};

export default ElectricalEngineeringPage;
