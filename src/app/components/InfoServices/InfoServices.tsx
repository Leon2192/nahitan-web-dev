"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InfoServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se activará una sola vez
    threshold: 0.2, // La animación se activará cuando el 20% del componente sea visible
  });

  return (
    <div className="flex items-center">
      <div
        className={`w-1/2 text-center ${inView ? "animate__fadeInLeft" : ""}`}
        ref={ref}
      >
        <img src="/logo.png" alt="Imagen" className="mx-auto" />
      </div>
      <motion.div
        className={`w-1/2 text-center mr-20 ${
          inView ? "animate__fadeInRight" : ""
        }`}
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl font-semibold">Nos enfocamos en la excelencia</p>
        <br />
        <p className="text-md font-semibold">
          En Nahitan, nos enorgullece ofrecer una gama de servicios de diseño y
          desarrollo web que combinan creatividad, innovación y un enfoque
          centrado en la estética visual. Nuestro compromiso es transformar tus
          ideas en experiencias web que cautiven a tus visitantes y dejen una
          impresión duradera.
        </p>
      </motion.div>
    </div>
  );
};

export default InfoServices;
