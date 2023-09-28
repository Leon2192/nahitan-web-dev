import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
  });

  return (
    <motion.div
      ref={ref}
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/rocketright.jpg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0"></div>
      <div className="p-6">
        <h2
          className="text-white text-5xl font-bold"
          style={{
            color: "#e9ff70",
          }}
        >
          Qué hacemos
        </h2>
        <br />
        <motion.h4
          className="text-white text-3xl font-bold"
          style={{
            width: "70%",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Trabajamos en diversos proyectos tanto para las mejores marcas, como
          para las startups que tienen la ambición de crecer en un mercado
          competitivo y altamente cambiante. Conocé a algunos de nuestros
          favoritos:
        </motion.h4>
        {/* Otra mitad para agregar contenido opcional */}
      </div>
    </motion.div>
  );
};

export default BannerInfo;

