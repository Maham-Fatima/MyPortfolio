import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}) => {
  const wordsArray = words.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: false });



  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: duration,
              delay: idx * 0.2,
             
            }}
            className={`inline-block ${className}`}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div ref={ref} className={`${className}`}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
