import { useState } from "react";
import { motion } from "framer-motion";



export const Tabs = ({
  tabs: propTabs,
  // containerClassName,
  // activeTabClassName,
  // tabClassName,
  // contentClassName
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (<>
    <div
      className=
        "h-50 flex flex-row items-center justify-start z-[2000] [perspective:1000px] overflow-hidden max-w-[100vw] bg-gray-200"
    >
      {propTabs.map((tab, idx) => (
      <button
      key={tab.title}
      onClick={() => moveSelectedTabToTop(idx)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`min-h-20 md:min-h-15 px-4 py-2 rounded-full ml-3 border bg-black group
        ${active.value === tab.value ? "border-gray-500" : "border-transparent"}
      `}
      style={{
        transformStyle: "preserve-3d",
        backgroundColor:"black"
      }}
    >
      {active.value === tab.value && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full border-blue-500"
        />
      )}
      <span className="relative z-10 text-white">{tab.title}</span>

    </button>
    
     
      ))}
    </div>
    <FadeInDiv
      tabs={tabs}
      active={active}
      key={active.value}
      hovering={hovering}
      className="mt-32" />
  </>);
};

export const FadeInDiv = ({
  // className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    (<div className="relative w-full h-screen bg-gray-200 z-100 
">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className="w-full h-full absolute top-0 left-0">
          {tab.content}
        </motion.div>
      ))}
    </div>)
  );
};
