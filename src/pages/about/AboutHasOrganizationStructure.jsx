import React from 'react'
import { motion } from 'framer-motion'
import Breadcrumbs from '../../components/Breadcrumbs'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    // Increased from 0.15 and 0.2 to make the sequence slower
    transition: { staggerChildren: 0.35, delayChildren: 0.4 }, 
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    // Increased duration from 0.6 to 1.0
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
}

function AboutHasOrganizationStructure() {
  return (
    <div className="min-h-screen bg-white">
   
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className="text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl"
        >
          Purbanchal University Organization Structure (Anusuchi-1)
        </motion.h1>

        {/* Image Container */}
        <motion.div
          variants={item}
          className="mt-6 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <motion.img
            src="/assets/img/suchi.jpg"
            alt="Purbanchal University Organization Structure"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            // Increased duration from 0.8 to 1.4 and delay from 0.4 to 0.6
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
            className="h-auto w-full object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Optional Bottom Note */}
        <motion.p
          variants={item}
          className="mt-4 text-center text-xs text-gray-500"
        >
          Official organizational hierarchy of Purbanchal University.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default AboutHasOrganizationStructure