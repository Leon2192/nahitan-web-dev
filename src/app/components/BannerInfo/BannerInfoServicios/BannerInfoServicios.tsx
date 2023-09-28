"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerInfoServicios = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
  });

  return (
    <motion.div
      ref={ref}
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bannerhome3.jpg')" }}
    >
      <div className="absolute inset-0"></div>
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-white text-6xl font-bold"
          style={{
            color: "#e9ff70",
          }}
        >
          Nuestros servicios
        </h2>
        <br />
        <motion.h4
          className="text-white text-2xl font-bold"
          style={{
            width: "75%",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
          transition={{ duration: 1, delay: 0.5 }}
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
