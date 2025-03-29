import React from 'react'
import { Tabs } from './ui/Tabs';
import { FaUsers, FaLightbulb, FaComments, FaClock, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
const Skill = () => {
    const tabs = [
        {
          title: "Language",
          value: "language",
          content: (
            <div className="md:w-[50vw]  mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-[100vw] h-[600px] flex flex-col justify-between">
              <div className="space-y-6">
                {/* Python Section */}
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-xl font-semibold text-blue-400">Python</span>
                  <div className="text-gray-300">Django</div>
                  <div className="mt-2">
                    <h5 className="font-semibold text-yellow-400">Strength</h5>
                    <p className="text-sm">
                      Data Science, ML, Data Analysis, Computer Vision, RESTful API, Socket, Backend
                    </p>
                  </div>
                </div>
      
                {/* JavaScript Section */}
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-xl font-semibold text-yellow-400">JavaScript</span>
                  <div className="text-gray-300">ReactJS, NodeJS</div>
                  <div className="mt-2">
                    <h5 className="font-semibold text-yellow-400">Strength</h5>
                    <p className="text-sm">
                      Frontend, Mobile Responsive Design, Backend, Web
                    </p>
                  </div>
                </div>
      
                {/* Java Section */}
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-xl font-semibold text-red-400">Java</span>
                  <div className="mt-2">
                    <h5 className="font-semibold text-yellow-400">Strength</h5>
                    <p className="text-sm">DSA, OOP, JSP, Servlet</p>
                  </div>
                </div>

                     {/* Java Section */}
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-xl font-semibold text-blue-400">SQL</span>
                  <div className="mt-2">
                    <h5 className="font-semibold text-yellow-400">Strength</h5>
                    <p className="text-sm">Oracle, MySQL</p>
                </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Soft Skills",
          value: "soft",
          content: (
            <div className="md:w-[50vw]  mx-auto p-6 bg-gray-900 text-white rounded-lg  max-w-[100vw] shadow-lg h-[600px] flex items-center justify-center">
              <div className="grid mt-5 grid-cols-1 gap-4 text-center h-full">
                <div className="flex flex-col items-center">
                  <FaUsers className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="font-medium">Teamwork</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaLightbulb className="w-8 h-8 text-yellow-400 mb-2" />
                  <span className="font-medium">Problem Solving</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaComments className="w-8 h-8 text-green-400 mb-2" />
                  <span className="font-medium">Communication</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaClock className="w-8 h-8 text-red-400 mb-2" />
                  <span className="font-medium">Time Management</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Additional Skills",
          value: "additional",
          content: (
            <div className="md:w-[50vw] mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg  max-w-[100vw] h-[600px] flex items-center justify-center">
              <div className="grid mt-5 grid-cols-1 gap-4 text-center h-full">
                <div className="flex flex-col items-center">
                  <FaAws className="w-10 h-10 text-yellow-500 mb-2" />
                  <span className="font-medium">AWS</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaGitAlt className="w-10 h-10 text-red-500 mb-2" />
                  <span className="font-medium">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaGithub className="w-10 h-10 text-gray-400 mb-2" />
                  <span className="font-medium">GitHub</span>
                </div>
              </div>
            </div>
          ),
        },
      ];
      
  return (
    <Tabs tabs={tabs} className='max-w-[100vw]'></Tabs>
  )
}

export default Skill