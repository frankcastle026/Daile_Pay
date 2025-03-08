import React from 'react';
import EmailForm from './Contact';
import { motion } from 'framer-motion';

const OurFocus = () => {
  return (
    <div className="px-8 py-12">
      {/* Animated Header */}
      <h1 className="text-6xl font-bold text-center mb-12 flex justify-center gap-2">
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-black mr-2"
        >
          OUR
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-black"
        >
          FOCUS
        </motion.span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
        {/* Left Side: First Paragraph with Slide-in from Left */}
        <motion.div
          className="lg:w-1/2 bg-white/20 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Wooden Packaging</h2>
          <p className="text-black leading-relaxed">
            Wooden packaging is known for its durability, cost-effectiveness, and versatility in transporting goods, with standard sizes available to suit various needs. Made from renewable resources, wooden packaging can last between 3 to 5 years and is often recycled and reused multiple times. Wooden pallets, typically made from oak and pine, are strong and capable of carrying loads between 1,000 and 2,000 pounds. They are also easily repairable, which extends their lifespan and makes them an eco-friendly choice for businesses seeking sustainable solutions.
          </p>
        </motion.div>

        {/* Right Side: Email Form with Slide-in from Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-1/2 bg-white/20 p-6 rounded-lg shadow-md w-full"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <EmailForm />
        </motion.div>
      </div>

      {/* Centered Bottom Paragraph with Slide-in from Bottom */}
      <motion.div
        className="bg-white/20 p-6 rounded-lg shadow-md max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-black leading-relaxed text-center">
          As <em><strong><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Daile Pay India</span></strong></em>, we focus on addressing the challenges associated with wooden packaging by providing comprehensive refurbishment services. Our process includes inspecting and cleaning the wood, removing unwanted parts, smoothing surfaces, repairing damages, treating for pests, and reinforcing the packaging for added strength. Each package is tested with weights and undergoes a final quality check to ensure timely delivery. In India, reusing wooden packaging offers both ecological and economic benefits by reducing waste, conserving resources, and minimizing carbon emissions. This approach also supports the circular economy by lowering manufacturing costs and enabling businesses to generate additional revenue through refurbished wooden packages, aligning with India's sustainability goals.
        </p>
      </motion.div>
    </div>
  );
};

export default OurFocus;
