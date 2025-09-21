"use client";

import { motion } from "framer-motion";

const DepartmentLayout = ({ title, subtitle, description, stats, tabs, children }) => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 mb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 font-semibold tracking-wide uppercase"
          >
            {subtitle}
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            {title}
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            {description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
              >
                <div className="mb-2 text-blue-600">{item.icon}</div>
                <h4 className="text-xl font-bold">{item.value}</h4>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-12 flex justify-center flex-wrap gap-4">
            {tabs.map((tab, i) => (
              <a
                key={i}
                href={`#${tab.id}`}
                className="px-5 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {children}
      </div>
    </>
  );
};

export default DepartmentLayout;
