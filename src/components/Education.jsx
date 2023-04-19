import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      // added animation properties to create a fade-in effect
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-10 px-8"
    >
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            {/* updated date range */}
            <span className="text-gray-400 text-sm">01/2020</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">High-Level Technical Degree Multiplatform in Software Dev</h3>
            <span className="text-gray-600">Montecastelo</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            {/* updated date range */}
            <span className="text-gray-400 text-sm">01/2018</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">High-Level Technical Degree in Web Software Development</h3>
            <span className="text-gray-600">Montecastelo</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
