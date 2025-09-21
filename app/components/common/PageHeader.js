"use client";

import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, description, bgImage = '/campus.png' }) => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src={bgImage}
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {subtitle && (
            <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">
              {subtitle}
            </h2>
          )}
          <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-300">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
