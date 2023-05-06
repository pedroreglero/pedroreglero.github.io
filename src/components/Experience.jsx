import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const Experience = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-10 px-8"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience</h2>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <span className="text-gray-400 text-sm">04/2022 - Currently working here</span>
          </div>
          <div className="flex-1 border-b-2 border-gray-200">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-xl text-gray-400" />
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                REACT JS | .NET BACKEND SOFTWARE DEVELOPER
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MdLocationOn className="text-xl text-gray-400" />
              <span className="text-gray-600">Quantion/Lufthansa • Barcelona</span>
            </div>
            <p className="text-gray-700 text-sm mt-2">
              My responsabilites involve contributing to the development of a chat assistant for the Lufthansa group, utilizing the
              Cognigy AI chat framework, as well as .NET technologies. Our team has adopted Docker and Kubernetes for deployment
              and employs Azure DevOps to coordinate project activities.
              I have been primarily responsible for developing React components to be displayed in the chat, and creating REST
              services in .Net Core, which are subsequently deployed within a Kubernetes cluster.
              Notably, I operate remotely, and as a remote team member, I engage in constant communication with my colleagues in
              English.
            </p>
            <div className="flex items-center justify-end mt-4">
              <RiArrowRightSLine className="text-gray-400 text-lg" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <span className="text-gray-400 text-sm">01/2022 - 04/2022</span>
          </div>
          <div className="flex-1 border-b-2 border-gray-200">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-xl text-gray-400" />
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                XAMARIN SOFTWARE DEVELOPER - REMOTE
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MdLocationOn className="text-xl text-gray-400" />
              <span className="text-gray-600">Etchasoft • Arizona</span>
            </div>
            <p className="text-gray-700 text-sm mt-2">
              I offered support in the realization of a mobile application project, for which I created, developed, tested, and
              maintained iOS and Android mobile applications using Xamarin / C#. I also played an integral role in the integration of
              both human and automated testing into our development process.
              I also assisted in the creation and evaluation of wireframes, providing a technical perspective on execution.
              In addition, I developed APIs to facilitate mobile functionality, while strictly adhering to agile development procedures.
            </p>
            <div className="flex items-center justify-end mt-4">
              <RiArrowRightSLine className="text-gray-400 text-lg" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <span className="text-gray-400 text-sm">01/2021 - 01/2022</span>
          </div>
          <div className="flex-1 border-b-2 border-gray-200">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-xl text-gray-400" />
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                MOBILE/WEB SOFTWARE DEVELOPER - REMOTE
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MdLocationOn className="text-xl text-gray-400" />
              <span className="text-gray-600">FeelingDevs • Madrid</span>
            </div>
            <p className="text-gray-700 text-sm mt-2">
              I have contributed to numerous mobile apps utilizing Xamarin Forms, and have also been involved in the development of
              a few web applications using ASP .Net.
              As part of my responsibilities I have also handled database management and have provided technical assistance across
              all projects. In addition, I have collaborated closely with the development team to establish precise application behavior,
              aesthetics, and functionality.

            </p>
            <div className="flex items-center justify-end mt-4">
              <RiArrowRightSLine className="text-gray-400 text-lg" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <span className="text-gray-400 text-sm">01/2018 - 01/2021</span>
          </div>
          <div className="flex-1 border-b-2 border-gray-200">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-xl text-gray-400" />
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                MOBILE/WEB SOFTWARE DEVELOPER
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MdLocationOn className="text-xl text-gray-400" />
              <span className="text-gray-600">Marka Informática • Vigo</span>
            </div>
            <p className="text-gray-700 text-sm mt-2">
              I have contributed to numerous mobile apps utilizing Xamarin Forms, and have also been involved in the development of
              a few web applications using ASP .Net.
              As part of my responsibilities I have also handled database management and have provided technical assistance across
              all projects. In addition, I have collaborated closely with the development team to establish precise application behavior,
              aesthetics, and functionality.
            </p>
            <div className="flex items-center justify-end mt-4">
              <RiArrowRightSLine className="text-gray-400 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
