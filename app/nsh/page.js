"use client";

import { motion } from 'framer-motion';
import DepartmentLayout from '../components/departments/DepartmentLayout';
import { FiBookOpen, FiUsers, FiAward, FiClock, FiCalendar } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const NSHPage = () => {
  const departmentData = {
    title: "Natural Sciences & Humanities",
    subtitle: "Department of",
    description: "Fostering critical thinking and communication skills through comprehensive education in sciences and humanities.",
    stats: [
      { label: 'Programs', value: '2+', icon: <FiBookOpen className="w-6 h-6 text-blue-600" /> },
      { label: 'Faculty', value: '15+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
      { label: 'Students', value: '200+', icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
      { label: 'Established', value: '2010', icon: <FiCalendar className="w-6 h-6 text-blue-600" /> },
      { label: 'Research Papers', value: '50+', icon: <FiAward className="w-6 h-6 text-blue-600" /> },
    ],
    tabs: [
      { id: 'about', label: 'About' },
      { id: 'programs', label: 'Programs' },
      { id: 'faculty', label: 'Faculty' },
      { id: 'research', label: 'Research' },
      { id: 'contact', label: 'Contact' },
    ]
  };

  const programs = [
    {
      title: "BS English (Literature & Linguistics)",
      degree: "Bachelor of Science",
      duration: "4 Years",
      credits: "130-136",
      description: "A comprehensive program that provides students with a strong foundation in English literature, linguistics, and communication skills. The program emphasizes critical thinking, analytical skills, and effective communication.",
      careerPaths: [
        "Content Writing & Editing",
        "Teaching & Education",
        "Media & Journalism",
        "Public Relations",
        "Publishing Industry"
      ]
    },
    {
      title: "MS Mathematics",
      degree: "Master of Science",
      duration: "2 Years",
      credits: "30-36",
      description: "An advanced program designed to provide in-depth knowledge of pure and applied mathematics. The program prepares students for careers in research, academia, and various industries requiring advanced mathematical skills.",
      careerPaths: [
        "Research & Development",
        "Data Science & Analytics",
        "Actuarial Science",
        "Academic Careers",
        "Engineering & Technology"
      ]
    }
  ];

  const faculty = [
    {
      name: "Dr. Abbas Mehmood",
      designation: "Associate Professor & Chairperson",
      qualification: "PhD in Natural Scinces",
      research: "Postcolonial Literature, Modernist Poetry"
    },
    {
      name: "Mr. Khyber Khan Khattak",
      designation: "Lecturer",
      qualification: "PhD in Applied Mathematics",
      research: "Numerical Analysis, Computational Mathematics"
    },
    {
      name: "Dr. Michael Brown",
      designation: "Assistant Professor",
      qualification: "PhD in Linguistics",
      research: "Sociolinguistics, Discourse Analysis"
    },
    {
      name: "Dr. Emily Davis",
      designation: "Assistant Professor",
      qualification: "PhD in Pure Mathematics",
      research: "Algebraic Geometry, Number Theory"
    }
  ];

  return (
    <>
    <Navbar/>
    <DepartmentLayout
      title={departmentData.title}
      subtitle={departmentData.subtitle}
      description={departmentData.description}
      stats={departmentData.stats}
      tabs={departmentData.tabs}
      bgColor="from-blue-50 to-white"
      textColor="text-blue-800"
      accentColor="bg-blue-600"
    >
      
      <section id="about" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">About the Department</h2>
        <div className="prose max-w-none text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            The <span className="font-semibold text-blue-800">Department of Natural Sciences and Humanities (DNSH)</span> at UET Mardan serves as the backbone of general education, 
            providing essential courses that complement the technical education across all engineering disciplines. 
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-blue-800">
              To foster critical thinking, effective communication, and a broad understanding of the world through 
              the study of sciences and humanities, while supporting the technical education of our students.
            </p>
          </div>
          <p>
            Established in 2010, our department has grown to become an integral part of UET Mardan, contributing significantly 
            to the academic and research endeavors of the university. We take pride in our diverse faculty who bring a wealth 
            of knowledge and experience to the classroom, ensuring our students receive a well-rounded education.
          </p>
          <p>
            Our curriculum is designed to develop not only subject-specific knowledge but also transferable skills such as 
            analytical thinking, problem-solving, and effective communication - skills that are highly valued in today's 
            competitive job market.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-2">Academic Programs</h2>
        <div className="space-y-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-lg transition-all hover:border-blue-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                <p className="text-blue-100">{program.degree}</p>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FiClock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Duration</span>
                      <span className="font-medium text-blue-900">{program.duration}</span>
                    </div>
                  </div>
                  <div className="h-px bg-gray-200 my-4 md:hidden"></div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FiAward className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Credits</span>
                      <span className="font-medium text-blue-900">{program.credits}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{program.description}</p>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <FiUsers className="mr-2" /> Career Paths:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {program.careerPaths.map((path, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
                    Learn more about this program
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-2">Our Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white text-xl font-bold group-hover:from-blue-700 group-hover:to-blue-500 transition-all">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-blue-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.designation}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.qualification}</p>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-blue-800">Research:</span> {member.research}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">Research & Publications</h2>
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Research Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Applied Mathematics & Computational Modeling",
              "English Literature & Critical Theory",
              "Linguistics & Language Acquisition",
              "Pure Mathematics & Theoretical Research",
              "Interdisciplinary Studies",
              "Cultural & Media Studies"
            ].map((area, index) => (
              <div key={index} className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-900">Recent Publications</h3>
          <div className="space-y-4">
            {[
              "Advancements in Computational Methods for Partial Differential Equations - Journal of Applied Mathematics, 2023",
              "Narratives of Displacement in Postcolonial Literature - International Journal of English Studies, 2023",
              "Mathematical Modeling of Social Networks - SIAM Journal on Applied Mathematics, 2023",
              "Linguistic Landscapes in Urban Pakistan - Language in Society, 2023"
            ].map((pub, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-800">{pub}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span>DOI: 10.xxxx/xxxxxx</span>
                  <span className="mx-2">•</span>
                  <a href="#" className="text-blue-600 hover:underline">View Publication</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">Contact Us</h2>
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-700">
                      <p>Department of Natural Sciences & Humanities</p>
                      <p>UET Mardan, Charsadda Road</p>
                      <p>Mardan, Khyber Pakhtunkhwa, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base">
                      <a href="mailto:dns@uetmardan.edu.pk" className="text-gray-700 hover:text-blue-600">dns@uetmardan.edu.pk</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base">
                      <a href="tel:+92937XXXXXX" className="text-gray-700 hover:text-blue-600">+92 937 XXXXXX</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-blue-900 mb-2">Office Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-600 text-sm mt-1">Closed on weekends and public holidays</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DepartmentLayout>
    </>
  );
};

export default NSHPage;
