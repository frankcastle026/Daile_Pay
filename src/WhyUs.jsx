import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const WhyUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  // Intersection Observer to trigger animation at 35% visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      className='text-black flex flex-col items-center justify-center px-4 min-h-screen'
      id='WhyUs'
      variants={containerVariants}
      initial='hidden'
      animate={controls}
    >
      <h1 className='lg:text-6xl font-semibold mb-6'> WHY US ? </h1>
      <ul className='space-y-4 text-center lg:text-lg px-8 max-w-3xl'>
    Despite the significant increase in Indian products, their packaging is essential for product safety and transportation, which is usually an extra expense but is neither affordable nor environmentally friendly, whereas Daile Pay brings affordability and sustainability.
  
  <li className='flex items-start my-2.5'>
    <span className='flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-1.5 mr-3'></span>
    Daile Pay aims for <span className='text-green-400'> ZERO LANDFILLS </span>.
  </li>
  <li className='flex items-start my-2.5'>
    <span className='flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-1.5 mr-3'></span>
    Daile Pay is here to decrease your <span className='text-green-400'> PACKAGING COSTS</span>.
  </li>
  <li className='flex items-start my-2.5'>
    <span className='flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-1.5 mr-3'></span>
    Daile Pay connects you to lower the <span className='text-green-400'> CARBON FOOTPRINTS</span>.
  </li>
  <li className='flex items-start my-2.5'>
    <span className='flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-1.5 mr-3'></span>
    Daile Pay brings you and your customer to be a part of <span className='text-green-400'> SUSTAINABILITY</span>.
  </li>
</ul>

    </motion.div>
  );
};

export default WhyUs;
