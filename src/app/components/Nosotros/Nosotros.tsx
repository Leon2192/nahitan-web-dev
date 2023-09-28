import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Nosotros = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
  });

  return (
    <motion.div
      ref={ref}
      className="h-[500px] p-6 flex flex-col justify-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <h3
        className="text-6xl font-bold"
        style={{
          color: "#aacc00",
        }}
      >
        ¡HOLA!
      </h3>
      <br />
      <motion.h4
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Somos Nahitan, hace varios años, comenzamos nuestro viaje como una
        agencia de diseño y desarrollo web con una visión clara: transformar
        ideas en experiencias digitales impactantes. Desde entonces, hemos
        dedicado nuestro tiempo y pasión a hacer precisamente eso.
      </motion.h4>
      <br />
      <div className="flex justify-center items-center mb-2">
        <div className="bg-white h-1 w-10 rounded-full"></div>
      </div>
      <br />
      <motion.h5
        className="text-3xl font-medium mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Nuestra Pasión por el Diseño y la Tecnología
      </motion.h5>

      <br />
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        En Nahitan, somos apasionados por el diseño creativo y la tecnología
        innovadora. Cada proyecto que emprendemos es una oportunidad para
        fusionar arte y funcionalidad, creando sitios web que no solo se ven
        impresionantes, sino que también funcionan de manera excepcional.
      </motion.p>
    </motion.div>
  );
};

export default Nosotros;
