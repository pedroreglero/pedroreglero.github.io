import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-10 px-8"
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <FiMail className="h-6 w-6" />
          <a href="mailto:pedroreglero@gmail.com" className="text-gray-400 hover:text-gray-100">
            pedroreglero@gmail.com
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <FiPhone className="h-6 w-6" />
          <a href="tel:+34645656582" className="text-gray-400 hover:text-gray-100">
            +34 645 65 65 82
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <FaGithub className="h-6 w-6" />
          <a href="https://github.com/pedroreglero" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100">
            /pedroreglero
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
