// app/(site)/about/page.jsx
"use client";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
      {/* Hero / Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.uetmardan.edu.pk/uetm/assets/homeimages/02-min.jpg')" // replace with official campus image
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            About UET Mardan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl"
          >
            University of Engineering & Technology Mardan — rooted in excellence, committed to innovation.
          </motion.p>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            University of Engineering & Technology Mardan (UET Mardan) was established on 7th March, 2018 by the Government of Khyber Pakhtunkhwa under the KP Universities Act. The University Campus is situated on main Charsada Road, Mardan spreading over an area of 172 Kanals. Previously, the Campus had been operational since 2002 as one of the satellite campuses of UET Peshawar. Initially, two teaching departments, i.e., Telecommunication Engineering and Computer Software Engineering were established with BSc programs. On the basis of public interest due to its location and available facilities, the campus showed fast pace growth in all aspects including infrastructure, laboratories, and faculty. In addition to MSc and PhD programs in the afore mentioned two departments, Department of Electrical Engineering was established in 2012 offering BSc Electrical Engineering in Power as well as Communication streams. Presently, about 1000 students, studying at Undergraduate and Postgraduate levels, are enrolled at UET Mardan. In 2016, Higher Education Commission (HEC), Pakistan approved a grant of Rs. 1.336 billion for the establishment of Civil, Electrical and Mechanical Engineering Departments and to enhance facilities for the students and faculty members in the campus. This approval acts as an endorsement by the HEC on viability of the campus to function as full-fledged engineering university.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Vision Statement</h3>
          <p className="text-gray-700">
            The UET Mardan aims to evolve as a distinguished seat of higher education and research and to contribute to local and global socioeconomic and technological development.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Mission Objectives</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>To impart quality engineering knowledge to the masses, specially to the local population.</li>
            <li>To provide industry, academia and research organizations with top class graduates who are technically sound with great leadership and management skills, who can contribute to societal and economic growth.</li>
            <li>To keep abreast of the latest trends by liaising with regulatory bodies as well as with the customers, and to improve academic processes accordingly.</li>
          </ul>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-blue-100 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800">Established</h4>
              <p className="text-gray-600 mt-2">2018</p>
            </div>
            <div className="p-6 bg-green-100 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800">Departments</h4>
              <p className="text-gray-600 mt-2">07</p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800">Undergraduate Programs</h4>
              <p className="text-gray-600 mt-2">07</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800">MSc Programs</h4>
              <p className="text-gray-600 mt-2">05</p>
            </div>
            <div className="p-6 bg-pink-100 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800">PhD Programs</h4>
              <p className="text-gray-600 mt-2">03</p>
            </div>
          </div>
        </motion.div>

        {/* Message from Chancellor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-1/3">
            <img 
              src="https://i.tribune.com.pk/media/images/gandapur1710944105-0/gandapur1710944105-0.jpg" 
              alt="Chancellor Sardar Ali Amin Khan Gandapur" 
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Message from Chancellor</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The University of Engineering & Technology Mardan was established in 2018, and is the second Public Sector Engineering university in Khyber Pakhtunkhwa, with a mission of providing quality education and preparing students to tackle the challenges of the industry. From its inception, UET Mardan has remained dedicated to serving the community by utilizing projects to solve local problems and further the common good. In a short time, UET Mardan has achieved significant success and continues to innovate through new programs that offer a contemporary curriculum, research opportunities, student engagement, practical training, faculty development, international collaborations, progress towards a state-of-the-art campus building, and industry partnerships.  
              I am pleased to note that UET Mardan has made remarkable progress in higher education by adding modern infrastructure and facilities that foster a conducive atmosphere for knowledge transfer. The university has introduced innovative research in various technologies, particularly in emerging engineering fields, to promote a high academic standard and technological advancement. It is commendable that UET Mardan is addressing the engineering technology void that has existed for several decades.  
              As Chancellor, I hope that UET Mardan continues its commitment to transforming its students into valuable graduates who will catalyze Pakistan's industrial and economic progress. I am confident that the university's unwavering commitment to technology research, education, and fostering a culture of innovation will ensure its continued success in the future.
            </p>
            <p className="mt-6 font-semibold text-gray-800">Sardar Ali Amin Khan Gandapur<br/>Chancellor</p>
          </div>
        </motion.div>

        {/* Message from Vice Chancellor */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse"
        >
          <div className="md:w-1/3">
            <img 
              src="https://iqra.study/wp-content/uploads/2024/07/Dr-Gul-Muhammad-Khan.png" 
              alt="Vice Chancellor Prof. Dr. Gul Muhammad Khan" 
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Message from Vice Chancellor</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Dear Students, Parents, and Esteemed Community Members, It is with great enthusiasm and a deep sense of responsibility that I address you as the Vice Chancellor of UET Mardan. With over 23 years of experience in teaching, research, innovation, commercialization and leadership, I am committed to transforming UET Mardan into a Centre of innovation, excellence, and a forward-thinking educational institution.  
              My goal is to empower young minds to solve complex engineering problems by utilizing empowering fields, enabling them to think beyond the boundaries of academic fields. This will transform them into entrepreneurs and leaders in their respective fields by solving the complex, interconnected challenges facing our nation and the world. This journey may be testing. Therefore, patience, commitment, and hard work will be the key traits to enable the achievement of these goals. I strongly encourage you to join us on this journey. Equally important is our commitment to gender inclusivity and creating an environment where every voice is heard and valued. Every individual can achieve their goals; the institution lays the groundwork to enlighten their vision and polish their skills through rigorous training in both curricular and co-curricular activities.  
              As a fundamental Artificial Intelligence scientist, educator, and entrepreneur, my vision is to equip our students with the tools and mindset required to thrive in the rapidly evolving world of engineering and technology. We are actively aligning our academic programs with modern, high-impact disciplines that shape our global future, including: Artificial Intelligence, Cybersecurity, Internet of Things (IoT), Cloud Computing, Quantum Computing, Climate Change Solutions.  
              At UET Mardan, we are embracing digital transformation, optimizing our resources, and integrating intelligent systems to enhance institutional efficiency. To further our mission, we are establishing an effective and efficient Office of Research, Innovation, and Commercialization (ORIC)—a strategic step toward nurturing entrepreneurship, supporting the development of spin-off ventures, supporting industry and international partners and translating academic research into impactful real-world innovations and drivers of the economy.  
              We are planning to introduce targeted scholarships for women in STEM, mentorship programs, and policies to ensure representation in leadership roles.
            </p>
            <p className="mt-6 font-semibold text-gray-800">Prof. Dr. Gul Muhammad Khan<br/>Vice Chancellor</p>
          </div>
        </motion.div>

        {/* Message from Pro Vice Chancellor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-1/3">
            <img 
              src="https://i.ytimg.com/vi/MLs1zMomA6Y/maxresdefault.jpg" 
              alt="Pro Vice Chancellor Prof. Dr. Imran Khan" 
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Message from Pro-Vice Chancellor</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              University of Engineering and Technology Mardan is nearly 40 months old, but it has continued to impart engineering knowledge since 2002. In its new identity as independent university since 2018, the University has excelled leaps and bounds; all its current engineering programs are accredited under Level-II (Washington Accord), it is offering BSc, MSc and PhD programs in multiple engineering disciplines, BSc Computer Science Program, tailored to meet the upcoming demands and structured on Outcome Based Education, it is offering admissions in two new engineering fields this year to mention a few.  
              UET Mardan has started with a noble vision to evolve as a distinguished seat of higher education and research and to contribute to local and global socioeconomic and technological development. We are making utmost efforts to impart quality engineering knowledge to our students, providing them opportunity to develop hands-on skills and have a professional engineering attitude. We have dedicated, highly qualified faculty members, complemented by able and qualified staff to support our academics, state-of-the-art well-equipment labs, active liaison and collaboration with industry and other stakeholders.  
              We are proud to offer all such services at a reasonable cost without compromise on quality of teaching, research, and other activities. In addition, we offer scholarships, student counselling and support, hostel, and transport facilities for both male and female students, playgrounds, mosque, courts, basic medical facility, cafeteria, tuck shop, ATM machine and laundry services. In short, we offer a conducive environment for a prospective student to transform from a 12th grader to a professional engineer. I look forward to welcoming our next batch of prospective engineers and computer scientists to the University of Engineering and Technology Mardan, which continues to scale new heights of academic achievement in the province and the country.
            </p>
            <p className="mt-6 font-semibold text-gray-800">Prof. Dr. Imran Khan<br/>Pro-Vice Chancellor</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
