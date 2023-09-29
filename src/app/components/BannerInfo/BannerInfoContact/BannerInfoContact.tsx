"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerInfoContact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center md:flex-row md:items-center w-[100%] h-[600px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/banners/bannerspace4.jpg')" }}
    >
      <div className="absolute inset-0"></div>
      <motion.div
        className="p-6 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-white text-6xl font-bold"
          style={{
            color: "#00b4d8",
          }}
        >
          Contacto
        </h2>
        <br />
        <motion.h4
          className="text-white text-2xl font-bold"
          style={{
            width: "100%", // Cambiamos el ancho al 100% para dispositivos móviles
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Consideramos que la comunicación es un factor clave en nuestro flujo
          de trabajo. Por eso queremos brindarte soluciones de una manera super
          personalizada. Te pedimos que completes el formulario en esta sección
          para que podamos ponernos en contacto contigo y poder iniciar tu
          proyecto juntos.
        </motion.h4>
      </motion.div>
    </motion.div>
  );
};

export default BannerInfoContact;
