import React from 'react'
import { LampContainer } from './ui/LampContainer'
import { motion } from 'framer-motion'
const Achievement = () => {
  return (
    <LampContainer>
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-2 md:mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 md:py-4 bg-clip-text text-center font-medium tracking-tight text-transparent max-w-[100vw] overflow-hidden"
    >
       <div>
        <h1>Award</h1>
        <div className='p-5'>
          <h2>First Position</h2>
          <div>5th(3.94) semester</div>
        </div>
          <div>
          <h2>Second Position</h2>
          <div>2nd(3.86), 3rd(3.85), 6th(3.96) semester</div>
          </div>

        </div>
        <div className='p-5'>
          <h1 className='p-5'>Certification</h1>
          <div className='p-5'>Google data analytics</div>
          <div>Docker kode kloud</div>
        </div>
    </motion.div>
  </LampContainer>

  )
}

export default Achievement