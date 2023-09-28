'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerInfoAbout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
  });

  return (
    <motion.div
      ref={ref}
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/pcright.jpg')" }}
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
            color: "#eeef20",
          }}
        >
          Sobre nosotros
        </h2>
        <br />
        <motion.h4
          className="text-white text-2xl font-bold"
          style={{
            width: "60%",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          En Nahitan, creemos que el éxito de nuestros clientes es nuestro
          propio éxito. Estamos comprometidos a brindarte un servicio
          excepcional y a llevar tus ideas al siguiente nivel. Cuando trabajas
          con nosotros, no solo obtienes un sitio web, obtienes una asociación
          para el éxito a largo plazo.
        </motion.h4>
      </motion.div>
    </motion.div>
  );
};

export default BannerInfoAbout;
