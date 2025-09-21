"use client";

import DepartmentTemplate from '@/app/components/departments/DepartmentTemplate';
import { FiBookOpen, FiUsers, FiAward, FiCalendar } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const ComputerSciencePage = () => {
  const departmentData = {
    title: "Computer Science",
    description: "Empowering the next generation of computer scientists with cutting-edge knowledge in software development, artificial intelligence, and computer systems. Our programs combine theoretical foundations with practical skills to prepare students for the rapidly evolving tech industry.",
    stats: [
      { label: 'Programs', value: '2+', icon: <FiBookOpen className="w-6 h-6 text-blue-600" /> },
            { label: 'Faculty', value: '12+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
            { label: 'Students', value: '300+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
            { label: 'Established', value: '2012', icon: <FiCalendar className="w-6 h-6 text-blue-600" /> },
            { label: 'Research Papers', value: '45+', icon: <FiAward className="w-6 h-6 text-blue-600" /> },
    ],
    programs: [
      {
        title: "BSc Computer Science",
        degree: "Bachelor of Science",
        duration: "4 Years",
        credits: "130-134",
        description: "Comprehensive program covering programming, algorithms, data structures, databases, and software engineering. Prepares students for careers in software development and IT industry.",
        careerPaths: [
          "Software Developer",
          "Web Developer",
          "Database Administrator",
          "Systems Analyst",
          "IT Consultant"
        ]
      },
      {
        title: "BSc Artificial Intelligence",
        degree: "Bachelor of Science",
        duration: "4 Years",
        credits: "132-136",
        description: "Specialized program focusing on machine learning, neural networks, natural language processing, and computer vision. Equips students with skills for AI-driven solutions.",
        careerPaths: [
          "AI Engineer",
          "Machine Learning Engineer",
          "Data Scientist",
          "Research Scientist",
          "AI Solutions Architect"
        ]
      },
      {
        title: "MSc Computer Science",
        degree: "Master of Science",
        duration: "2 Years",
        credits: "30-36",
        description: "Advanced studies in specialized areas of computer science including artificial intelligence, data science, cybersecurity, and software engineering. Emphasizes research and development.",
        careerPaths: [
          "Senior Software Engineer",
          "Data Scientist",
          "Research Scientist",
          "Technical Lead",
          "Academia & Research"
        ]
      }
    ],
    faculty: [
      {
        name: "Dr. Saima Khan",
        designation: "Professor & Head of Department",
        qualification: "PhD in Computer Science, NUST, Pakistan",
        research: "Artificial Intelligence, Machine Learning, Natural Language Processing"
      },
      {
        name: "Dr. Ali Raza",
        designation: "Associate Professor",
        qualification: "PhD in Software Engineering, LUMS, Pakistan",
        research: "Software Architecture, Cloud Computing, Distributed Systems"
      },
      {
        name: "Dr. Fatima Ahmed",
        designation: "Assistant Professor",
        qualification: "PhD in Data Science, UET Peshawar, Pakistan",
        research: "Big Data Analytics, Data Mining, Business Intelligence"
      },
      {
        name: "Engr. Usman Khan",
        designation: "Assistant Professor",
        qualification: "MS in Cybersecurity, NUST, Pakistan",
        research: "Cybersecurity, Network Security, Ethical Hacking"
      },
      {
        name: "Engr. Ayesha Malik",
        designation: "Lecturer",
        qualification: "MS in Artificial Intelligence, UET Peshawar, Pakistan",
        research: "Computer Vision, Deep Learning, Pattern Recognition"
      }
    ],
    researchAreas: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Big Data Analytics",
      "Cybersecurity & Information Assurance",
      "Cloud Computing & Distributed Systems",
      "Software Engineering & Architecture",
      "Internet of Things (IoT)",
      "Computer Vision & Image Processing"
    ],
    recentPublications: [
      "Khan, S., & Ahmed, F. (2023). 'Deep Learning Approaches for Sentiment Analysis in Low-Resource Languages.' Journal of Artificial Intelligence Research.",
      "Raza, A., et al. (2023). 'A Framework for Secure Cloud-Based Healthcare Systems.' IEEE Transactions on Cloud Computing.",
      "Ahmed, F., & Khan, U. (2023). 'Predictive Analytics for Student Performance Using Machine Learning.' Journal of Educational Data Mining.",
      "Malik, A., & Khan, S. (2022). 'Real-Time Object Detection Using YOLOv5: A Comparative Study.' International Journal of Computer Vision.",
      "Khan, U., & Raza, A. (2022). 'Blockchain-Based Secure Voting System: A Comprehensive Review.' Journal of Information Security and Applications.'"
    ],
    contactInfo: {
      email: "cs@uetmardan.edu.pk",
      phone: "+92-937-9234568",
      address: "Department of Computer Science, UET Mardan, Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan"
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

export default ComputerSciencePage;
