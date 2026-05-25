import { motion } from "framer-motion"

import {
  fadeInUp,
  staggerContainer,
} from "../../animation/variants"

function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="
        py-24
        px-6
        text-center
      "
    >
      <motion.h1
        variants={fadeInUp}
        className="
          text-6xl
          md:text-7xl
          font-bold
          leading-tight
          bg-gradient-to-r
          from-black
          via-gray-700
          to-gray-400
          bg-clip-text
          text-transparent
        "
      >
       
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="
          mt-6
          text-lg
          text-gray-500
          max-w-2xl
          mx-auto
        "
      >
       
      </motion.p>

      
    </motion.section>
  )
}

export default Hero