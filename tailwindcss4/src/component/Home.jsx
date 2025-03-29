import { motion } from "framer-motion"
import profile from "../assets/coder.jpg";
import ResumeDownload from "./resumeDownload";
import "../../src/index.css"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black overflow-hidden">
      <div className="grid gap-1 grid-cols-1 md:grid-cols-12 p-10">
        <div className="space-y-4 md:col-span-7 bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2,duration: 1 }}
          >
            <div className="flex flex-col items-center row-7 text-slate-300 font-bold">
           
               
                 <h2>A Passionate Software Engineer</h2>
                 <h2>Data science AI Enthusiast.</h2>
                 <h2>Building Vision through Code.</h2>
            </div>  
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="p-2 text-slate-400"
          >
            A passionate Web Developer and AI Enthusiast having expertise in javascript and python. Driven by curiosity, I thrive on turning ideas into impactful digital experiences. I aim to create innovative solutions that blend technology and creativity to solve real-world problems and make a meaningful difference.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="p-2 text-slate-400"
          >
           <ResumeDownload/>
          </motion.div>
          
        </div>
        <div className="flex justify-center items-center md:col-span-5 mt-8 md:mt-0 ">

        <div className="relative p-5 rounded-full">
    {/* Asymmetric border effect */}
    <div className="absolute top-0 left-0 w-[50%] h-[50%] border-t-4 border-l-4 border-yellow-500 rounded-full border-move"></div>
    <div className="absolute bottom-0 right-0 w-[80%] h-[80%] border-b-4 border-r-4 border-yellow-600 rounded-full border-move"></div>
    <div className="absolute top-0 right-0 w-[70%] h-[70%] border-t-4 border-l-4 border-cyan-400 rounded-full border-move"></div>
    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] border-b-4 border-r-4 border-cyan-600 rounded-full border-move"></div>

    <img
      src={profile}
      alt="profile"
      className="rounded-full w-50 h-50 object-cover relative z-10"
    />
  </div>
        
        </div>
      </div>
    </div>
  );
}