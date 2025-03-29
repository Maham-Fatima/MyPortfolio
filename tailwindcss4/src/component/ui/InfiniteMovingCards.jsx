import React, { useEffect, useRef, useState } from "react";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items for smooth infinite effect
      scrollerContent.forEach((item) => {
        const duplicate = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicate);
      });

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-[90vw] md:w-[70vw] flex justify-center ${className} border-l-4 border-r-4`}
    >
      <ul
        ref={scrollerRef}
        className={`flex gap-4 py-4 flex-nowrap ${start ? "animate-scroll" : ""}`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-slate-700 px-8 py-6 md:w-[450px] bg-black"
          >
            <blockquote>
              <div className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </div>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll ${speed === "fast" ? "10s" : speed === "slow" ? "60s" : "20s"} linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteMovingCards;
