import React from 'react'
import InfiniteMovingCards from './ui/InfiniteMovingCards';
import TextGenerateEffect from './ui/TextGenerateEffect';
import zenpattern from '../assets/zenpattern.jpg'
const About = () => {
    let items = [
      {
        quote: "Bachelor of Software Engineering - BS(SE)",
        name: "CGPA: 3.79 out of 4.00",
        title: "National University of Emerging Sciences and Technology",
      },
      {
        quote: "My heart beats for building solutions that bring **Ease** and **Innovation** into the digital world. Whether it's detecting suspicious activities 🔍 or creating seamless e-commerce experiences 🛍️ — I'm all about turning ideas into impact.",
        name: "Data science, Machine learning enthusiast, Web developer",
        title: "Interest -- Impact > Fancy Projects",
      },
      {
        quote: "When I'm not coding at night 🌙, you'll find me lost in **sketching**, **painting**, or spending time with **pets** 🐾 — living life as a true **Introvert** who finds beauty in small moments.",
        name: "🎨 Sketching + Painting 🐾 Pets 🌙 Coding at Night 🌿 Pure Introvert",
        title: "Hobbies",
      },
    ];
    return (
      <div
        className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-200 overflow-hidden relative pb-20 "
        // style={{
        //   backgroundImage: `url(${zenpattern})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        {/* Dark Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
    
        <div className="relative flex flex-col justify-center items-center bg-transparent overflow-hidden">
          <div>
            <h1
              style={{ fontFamily: "Uncial Antiqua" }}
              className="text-xl font-bold text-center tracking-wide text-white p-5"
            >
              <TextGenerateEffect words={"ABOUT ME"} className={"text-black"} />
            </h1>
          </div>
    
          <InfiniteMovingCards items={items} />
        </div>
      </div>
    );
    
  };
  
  export default About;