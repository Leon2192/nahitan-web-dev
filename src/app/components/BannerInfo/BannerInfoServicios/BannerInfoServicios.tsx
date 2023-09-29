"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerInfoServicios = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -20,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex items-center w-full md:w-[100%] h-[600px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bannerhome3.jpg')" }}
    >
      <div className="absolute inset-0"></div>
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <h2
          className="text-white text-4xl md:text-6xl font-bold"
          style={{
            color: "#e9ff70",
          }}
        >
          Nuestros servicios
        </h2>
        <br />
        <motion.h4
          className="text-white text-xl md:text-2xl font-bold"
          style={{
            width: "100%",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ delay: 0.5 }}
        >
          Estamos listos para convertir tus ideas en realidad en línea.
          Ofrecemos una gama completa de servicios que abarcan desde la
          concepción y el diseño creativo hasta la implementación técnica y el
          mantenimiento continuo.
        </motion.h4>
      </motion.div>
    </motion.div>
  );
};

export default BannerInfoServicios;
