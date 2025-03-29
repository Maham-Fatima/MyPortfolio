import React, { useEffect, useState, useRef } from 'react'
import {Link} from "react-scroll"
import { motion } from 'framer-motion';
import "../../src/index.css"
import home from "../assets/home.svg"
import about from "../assets/about.svg"
import skill from "../assets/skill.svg"
import achievement from "../assets/achievement.svg"
import project from "../assets/project.svg"
import contact from "../assets/contact.svg"
function Header({onComplete}) {
  const list = [{
    name:"Home", 
    icon: <img src={home} alt="" style={{width:"5vw", height:"5vh"}} />
  
  } ,
{
    name: "About", 
    icon: <img src={about} alt="" style={{width:"5vw", height:"5vh"}}/>
} ,{
    name:"Skill", 
    icon:  <img src={skill} alt="" style={{width:"5vw", height:"5vh"}}/>
},{
    name: "Achievement", 
    icon: <img src={achievement} alt="" style={{width:"5vw", height:"5vh"}}/> 
},
{name: "Project", 
icon: <img src={project} alt="" style={{width:"5vw", height:"5vh"}}/> 
},{
    name:"Contact", 
    icon:  <img src={contact} alt="" style={{width:"5vw", height:"5vh"}}/>
  }]
  const navRef = useRef(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScroll) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScroll(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className='h-[30vh] md:h-[20vh] w-full overflow-hidden'>
      <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[1000] nav-gradient  text-white flex flex-col items-center space-y-4 p-2 md:p-5 h-[30vh] md:h-[20vh] border-b border-gray-800 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="grid grid-cols-3 md:flex md:flex-row md:space-x-8 relative z-10"
        style={{ fontFamily: "Uncial Antiqua" }}
      >
        {list.map((key, index) => (
          <Link 
          key={key.name}
          to={key.name.toLowerCase()} 
          smooth={"true"} 
          duration={800} 
          offset={-80} 
          ><div className="flex flex-col items-center group" key={key.name}>
            <div className="transition-all duration-300 group-hover:scale-125">
              {key.icon}
            </div>
            <div className="text-sm mt-3 opacity-0 group-hover:opacity-100 duration-300 ease-in">
              {key.name}
            </div>
          </div></Link>
          
        ))}
      </div>

      {/* Ripple Magic 🔥 */}
      <div className="relative w-full h-40 flex justify-center items-center">
        <motion.div
          className="absolute rounded-full w-40 h-40 border-[2px] border-white"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 4, 6], opacity: [1, 0.8, 0] }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.div
          className="text-slate-300 tracking-[.3em] animate-pulse z-10 once"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 1 }}
          style={{ fontFamily: "Uncial Antiqua" }}
        >
          M A H A M &nbsp; F A T I M A
        </motion.div>
      </div>
    </nav>
    </div>
   
  );
}

export default Header;