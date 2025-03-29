import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "../../index.css";


export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);
  const fourthRow = products.slice(12, 16)
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
 
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 250]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -250]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div>
      <div
      ref={ref}
      className="min-h-screen z-[2000] py-40 bg-gray-200 antialiased overflow-x-hidden overflow-y-scroll scrollbar-hide relative flex flex-col self-auto [perspective:600px] md:[perspective:1000px] [transform-style:preserve-3d]  max-w-[100vw]"
    >
      <Header />
      <motion.div
  style={{
    rotateX,
    rotateZ,
    translateY,
    opacity,
  }}
  className="flex flex-col items-center justify-center md:space-y-20"
>
  {[firstRow, secondRow, thirdRow, fourthRow].map((row, rowIndex) => (
    <motion.div
      key={rowIndex}
      className="flex overflow-x-scroll scrollbar-hide space-x-10 max-w-full px-10"
    >
      {row.map((product) => (
        <ProductCard
          product={product}
          translate={rowIndex % 2 === 0 ? translateX : translateXReverse}
          key={product.title}
          className="w-[270px] flex-shrink-0" // Ensures horizontal scrolling
        />
      ))}
    </motion.div>
  ))}
</motion.div>


    </div>
    </div>
    
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold">
        The Ultimate <br /> Project studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-slate-900">
        I build beautiful products with the latest technologies and frameworks.
      </p>
    </div>)
  );
};

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product h-100 w-[21rem] relative shrink-0 bg-black rounded m-8 flex flex-col items-center justify-center"
    >
      {/* Clickable Link Covering Entire Card */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      ></a>

      {/* Thumbnail Background */}
      <div
        className="h-60 w-full bg-cover bg-center shadow-lg mt-15"
        style={{ backgroundImage: `url(${product.thumnail})` }}
      ></div>

      {/* Title on Hover */}
      <h2 className="absolute top-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>

      {/* Description */}
      <div className="text-slate-200 p-5">{product.description}</div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center items-center mb-3">
        {Array.isArray(product.tags) ? (
          product.tags.map((word, index) => (
            <span
              key={index}
              className="bg-cyan-700 text-white rounded-xl px-2 py-1 m-1"
            >
              {word}
            </span>
          ))
        ) : (
          <span className="text-cyan">No tags available</span>
        )}
      </div>
    </motion.div>
  );
};
