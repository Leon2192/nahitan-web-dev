"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InfoAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="flex items-center mt-20" ref={ref}>
      <motion.div
        className="w-1/2 text-center ml-5"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.p className="text-5xl font-semibold" variants={textVariants}>
          Misión
        </motion.p>
        <br />
        <motion.p className="text-md font-semibold" variants={textVariants}>
          En Nahitan, nuestra misión es llevar la creatividad y la innovación a
          la vanguardia del mundo digital. Nos dedicamos a diseñar y desarrollar
          experiencias web de alto impacto visual que cautiven a nuestra
          audiencia y superen las expectativas de nuestros clientes. Nuestro
          compromiso con la calidad y la excelencia nos impulsa a crear
          soluciones web que no solo sean hermosas, sino también altamente
          funcionales y efectivas. Estamos decididos a ser líderes en la
          industria, transformando ideas en realidades digitales que dejen una
          impresión duradera.
        </motion.p>
        <br />
        <motion.p className="text-5xl font-semibold" variants={textVariants}>
          Visión
        </motion.p>
        <br />
        <motion.p className="text-md font-semibold" variants={textVariants}>
          Nuestra visión es ser reconocidos como un referente en la industria
          del diseño y desarrollo web, donde la creatividad y la calidad son los
          pilares fundamentales de nuestro trabajo. Buscamos ser el socio
          preferido de empresas y emprendedores que buscan sobresalir en línea,
          brindando soluciones web que generen un alto impacto visual y ayuden a
          alcanzar sus metas de negocio. Nos esforzamos por continuar innovando,
          creciendo y expandiendo nuestra influencia global, manteniendo siempre
          nuestro compromiso con la excelencia y la satisfacción del cliente.
          Con cada proyecto, nos acercamos un paso más a nuestra visión de un
          mundo digital impresionante y de calidad excepcional.
        </motion.p>
      </motion.div>
      <motion.div
        className="w-1/2 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.img
          src="/logo.png"
          alt="Imagen"
          className="mx-auto"
          variants={textVariants}
        />
      </motion.div>
    </div>
  );
};

export default InfoAbout;
