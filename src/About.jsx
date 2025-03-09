import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,        // Animate every time it comes into view
    threshold: 0.35            // Trigger at 35% visibility
  })

  // Separate refs for each <p> element
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.35
  })

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.35
  })

  return (
    <div 
      ref={ref} 
      className='text-black flex flex-col items-center justify-center px-4' id='About'>
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="lg:text-7xl text-black font-bold mb-8"
      >
        About Us
      </motion.h1>
      
      <div className='flex flex-col lg:flex-row gap-8 max-w-5xl mt-12'>
        <motion.p
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex-1 text-center lg:text-left'
        >
          Daile Pay India is a reusable company that works in the B2B packaging world.
          We specialize in making packages reusable by refurbishing old packaging 
          and restoring it to its original quality. Our mission is to promote 
          sustainability and reduce waste in packaging.
        </motion.p>

        <motion.p
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex-1 text-center lg:text-left'
        >
          Our innovative approach operates in a closed loop between your packaging left 
          at your customer and back to you. We ensure that the packaging is collected, 
          refurbished, and redistributed efficiently, maintaining high standards of 
          quality and sustainability.
        </motion.p>
      </div>
    </div>
  )
}

export default About
