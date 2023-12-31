"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LiaPagerSolid } from "react-icons/lia";
import { MdWorkspacePremium } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CardsServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold mt-6 mb-4">Nuestros planes</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
        <motion.div
          ref={ref}
          className={`w-full md:w-1/3 p-4 ${inView ? "animate__fadeIn" : ""}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <LiaPagerSolid className="text-8xl text-blue-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Landing Page</p>
            <p className="text-md font-semibold">
              Sitio web personalizado de una sola página que te ofrece la
              solución perfecta para destacar en línea y captar leads.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          className={`w-full md:w-1/3 p-4 ${inView ? "animate__fadeIn" : ""}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center">
            <MdWorkspacePremium className="text-8xl text-green-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Diseño Web Premium</p>
            <p className="text-md font-semibold">
              Servicio completo de diseño web y desarrollo es la solución
              definitiva para llevar tu presencia en línea al siguiente nivel.
              Con una combinación perfecta de creatividad y experiencia técnica.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          className={`w-full md:w-1/3 p-4 ${inView ? "animate__fadeIn" : ""}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center">
            <AiOutlineShoppingCart className="text-8xl text-red-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Diseño web Full</p>
            <p className="text-md font-semibold">
              Además del diseño y desarrollo, nos ocupamos de la optimización de
              motores de búsqueda (SEO), y llevamos tu proyecto al siguiente
              nivel para convertirse en un poderoso portal de ventas.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsServices;
