"use client";

import { motion } from 'framer-motion';
import DepartmentLayout from './DepartmentLayout';
import { FiBookOpen, FiUsers, FiAward, FiClock, FiCalendar, FiBriefcase } from 'react-icons/fi';

const DepartmentTemplate = ({
  title,
  description,
  stats,
  programs,
  faculty,
  researchAreas,
  recentPublications,
  contactInfo,
  bgColor = "from-blue-50 to-white",
  textColor = "text-blue-800",
  accentColor = "bg-blue-600"
}) => {
  return (
    <DepartmentLayout
      title={title}
      subtitle="Department of"
      description={description}
      stats={stats}
      tabs={[
        { id: 'about', label: 'About' },
        { id: 'programs', label: 'Programs' },
        { id: 'faculty', label: 'Faculty' },
        { id: 'research', label: 'Research' },
        { id: 'contact', label: 'Contact' },
      ]}
      bgColor={bgColor}
      textColor={textColor}
      accentColor={accentColor}
    >
      {/* About Section */}
      <section id="about" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">About the Department</h2>
        <div className="prose max-w-none text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            {description}
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-blue-800">
              To provide exceptional education and research opportunities in {title}, 
              fostering innovation and preparing students for successful careers in their field.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {programs && programs.length > 0 && (
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
                  
                  {program.careerPaths && program.careerPaths.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <FiBriefcase className="mr-2" /> Career Paths:
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
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Labs & Facilities Section */}
      <section id="labs" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-2">Labs & Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lab Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group h-64"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bdda5f6a8d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Advanced Research Lab</h3>
                <p className="text-sm opacity-90">State-of-the-art equipment for cutting-edge research and experiments.</p>
              </div>
            </div>
          </motion.div>

          {/* Lab Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-xl overflow-hidden shadow-lg group h-64"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2zsZTXFu280zodtsoPW5CiUc0bYQnKoG_Q&s')"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Computer & Simulation Lab</h3>
                <p className="text-sm opacity-90">High-performance computing resources for complex simulations and modeling.</p>
              </div>
            </div>
          </motion.div>

          {/* Workshop Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-lg group h-64"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJxoKmyAYGYWEZ7Q12AxvsmjZCoKgF4EO56VacAuL6eRk6Mj3anymP1FiVXaIlqcebuY&usqp=CAU')"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Engineering Workshop</h3>
                <p className="text-sm opacity-90">Hands-on training with modern tools and machinery for practical learning.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="mb-16 scroll-mt-24">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Faculty</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {faculty.map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md"
      >
        <div className="w-full h-48 relative">
          <img
            src={member.photo}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
          <p className="text-sm text-blue-600">{member.title}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Student Life Section */}
      

      {/* Research Section */}
      {(researchAreas || recentPublications) && (
        <section id="research" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">Research & Publications</h2>
          
          {researchAreas && researchAreas.length > 0 && (
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Research Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {researchAreas.map((area, index) => (
                  <span key={index} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-800 border border-blue-100">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {recentPublications && recentPublications.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Recent Publications</h3>
              <ul className="space-y-3">
                {recentPublications.map((pub, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{pub}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

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
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-500">{contactInfo?.address || 'UET Mardan, Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan'}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a href={`mailto:${contactInfo?.email || 'info@uetmardan.edu.pk'}`} className="text-sm text-blue-600 hover:underline">
                        {contactInfo?.email || 'info@uetmardan.edu.pk'}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a href={`tel:${contactInfo?.phone ? contactInfo.phone.replace(/\D/g, '') : '92319230295'}`} className="text-sm text-gray-500 hover:text-blue-600">
                        {contactInfo?.phone || '+92-319-230295'}
                      </a>
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
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" id="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
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
  );
};

export default DepartmentTemplate;
