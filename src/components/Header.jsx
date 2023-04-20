import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-12 px-8 flex flex-col justify-center items-center"
    >
      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4">
        <Image
          src="/profile-pic.jpeg"
          alt="Profile Pic"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-center">
        Pedro Reglero
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4">
        I am a young and enthusiastic Software Developer with a keen interest in programming web and mobile applications.
        With over four years of experience, I have effectively utilized my website and mobile app development abilities to
        identify, formulate, and solve problems using my programming knowledge.
        I excel at recognizing critical paths and implementing practical solutions within time-sensitive circumstances, making
        me a great problem-solver.
      </h2>
      <p className="text-gray-200 text-center max-w-lg">
        As a quick learner and professional developer, I possess extensive expertise in the fundamental aspects, methodologies,
        and processes associated with various programming technologies, including React, React Native, .Net, Xamarin Forms,
        ASP. Net/Core, C#, Windows Forms, Node JS, Python, SQL Server and MySQL.
      </p>
    </motion.div>
  );
};

export default Header;
