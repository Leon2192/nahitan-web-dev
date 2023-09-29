"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InfoServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col items-center md:flex-row md:items-center">
      <div
        className={`w-full md:w-1/2 text-center ${
          inView ? "animate__fadeIn" : ""
        }`}
        ref={ref}
      >
        <img src="/logo.png" alt="Imagen" className="mx-auto" />
      </div>
      <motion.div
        className={`w-full md:w-1/2 text-center mt-4 md:mt-0 ${
          inView ? "animate__fadeIn" : ""
        }`}
        ref={ref}
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
