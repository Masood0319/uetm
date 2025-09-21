"use client";

import DepartmentTemplate from '@/app/components/departments/DepartmentTemplate';
import Navbar from '../components/Navbar';
import { FiBookOpen, FiUsers, FiAward, FiCalendar } from 'react-icons/fi';

const CivilEngineeringPage = () => {
  const departmentData = {
    title: "Civil Engineering",
    description: "Dedicated to excellence in civil engineering education and research, preparing students to design and build sustainable infrastructure for the future. Our programs combine theoretical knowledge with practical applications in structural, geotechnical, transportation, and environmental engineering.",
    stats: [
      { label: 'Programs', value: '2+', icon: <FiBookOpen className="w-6 h-6 text-blue-600" /> },
            { label: 'Faculty', value: '12+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
            { label: 'Students', value: '300+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
            { label: 'Established', value: '2012', icon: <FiCalendar className="w-6 h-6 text-blue-600" /> },
            { label: 'Research Papers', value: '45+', icon: <FiAward className="w-6 h-6 text-blue-600" /> },
    ],
    programs: [
      {
        title: "BSc Civil Engineering",
        degree: "Bachelor of Science",
        duration: "4 Years",
        credits: "136-140",
        description: "Comprehensive program covering structural analysis, construction management, geotechnical engineering, and transportation systems. Prepares students for professional practice in civil engineering.",
        careerPaths: [
          "Structural Engineer",
          "Geotechnical Engineer",
          "Transportation Engineer",
          "Construction Manager",
          "Project Engineer"
        ]
      },
      {
        title: "MSc Civil Engineering",
        degree: "Master of Science",
        duration: "2 Years",
        credits: "30-36",
        description: "Advanced studies in specialized areas of civil engineering including structural engineering, geotechnical engineering, and construction management. Focuses on research and advanced applications.",
        careerPaths: [
          "Senior Civil Engineer",
          "Structural Design Engineer",
          "Project Manager",
          "Research Engineer",
          "Academia & Research"
        ]
      }
    ],
    faculty: [
      {
        name: "Dr. Ahmed Khan",
        designation: "Professor & Head of Department",
        qualification: "PhD in Structural Engineering, UET Peshawar, Pakistan",
        research: "Earthquake Engineering, Seismic Design, Structural Dynamics"
      },
      {
        name: "Dr. Sanaullah Khan",
        designation: "Associate Professor",
        qualification: "PhD in Geotechnical Engineering, NUST, Pakistan",
        research: "Soil Mechanics, Foundation Engineering, Slope Stability"
      },
      {
        name: "Engr. Farooq Ahmad",
        designation: "Assistant Professor",
        qualification: "MS in Transportation Engineering, UET Peshawar, Pakistan",
        research: "Traffic Engineering, Pavement Design, Transportation Planning"
      },
      {
        name: "Dr. Ayesha Bibi",
        designation: "Assistant Professor",
        qualification: "PhD in Environmental Engineering, UET Peshawar, Pakistan",
        research: "Water Resources, Environmental Impact Assessment, Waste Management"
      }
    ],
    researchAreas: [
      "Structural Engineering & Design",
      "Geotechnical & Foundation Engineering",
      "Transportation & Highway Engineering",
      "Environmental Engineering",
      "Water Resources Management",
      "Construction Management",
      "Earthquake Engineering"
    ],
    recentPublications: [
      "Khan, A., & Ahmad, F. (2023). 'Seismic Performance of Reinforced Concrete Buildings with Different Structural Systems.' Journal of Structural Engineering.",
      "Khan, S., et al. (2023). 'Stability Analysis of Slopes Using Finite Element Method.' International Journal of Geomechanics.",
      "Bibi, A., & Khan, A. (2022). 'Sustainable Water Management in Urban Areas: A Case Study of Mardan City.' Journal of Environmental Management.",
      "Ahmad, F., & Khan, S. (2022). 'Performance Evaluation of Flexible Pavements Using Finite Element Analysis.' International Journal of Pavement Engineering.'"
    ],
    contactInfo: {
      email: "civil@uetmardan.edu.pk",
      phone: "+92-937-9234570",
      address: "Department of Civil Engineering, UET Mardan, Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan"
    }
  };

  return (
    <>
    <Navbar/>
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

export default CivilEngineeringPage;
