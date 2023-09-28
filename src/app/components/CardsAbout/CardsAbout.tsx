'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiBrain } from "react-icons/gi";
import { BsPalette } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const CardsAbout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="text-center">
      <motion.h1
        className="text-5xl font-semibold mt-6 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
      >
        Nuestro enfoque
      </motion.h1>
      <br />
      <div className="flex justify-center items-center mb-2">
        <div className="bg-white h-1 w-60 rounded-full"></div>
      </div>
      <br />
      <div className="flex justify-between">
        <motion.div
          className="w-1/3 p-4"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <div className="text-center">
            <GiBrain className="text-8xl text-blue-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Creatividad</p>
            <p className="text-md font-semibold">
              Pensamos la mejor opción contemplando la competencia en el mercado
              sobre el rubro que posee tu proyecto para que tu sitio esté en la
              vanguardia.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-1/3 p-4"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <BsPalette className="text-8xl text-green-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Diseño</p>
            <p className="text-md font-semibold">
              Nuestros proyectos se orientan a construir aplicaciones web de
              alto impacto visual.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-1/3 p-4"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center">
            <BiTimeFive className="text-8xl text-red-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Solidez</p>
            <p className="text-md font-semibold">
              No alcanza con un aspecto llamativo, nuestro producto debe ser
              sólido y sostenible en el tiempo.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center mb-2">
        <div className="bg-white h-1 w-20 rounded-full"></div>
      </div>
    </div>
  );
};

export default CardsAbout;
