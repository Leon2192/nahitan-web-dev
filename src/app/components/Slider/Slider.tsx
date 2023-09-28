"use client";
import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";

const Slider = () => {
  const textVariants = {
    hidden: { x: -100 },
    visible: { x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="flex items-center w-[100%] h-[700px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bannerhome2.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="p-6 mt-40">
        <br />
        <br />
        <motion.h2
          className="text-white text-6xl font-bold mt-20"
          style={{
            color: "#90e0ef",
          }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Nahitan
        </motion.h2>
        <motion.h2
          className="text-white text-5xl font-bold mt-5"
          style={{ color: "#f72585" }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Diseño y Desarrollo Web
        </motion.h2>
        <br />
        <motion.h4
          className="text-white text-4xl font-bold"
          style={{
            width: "100%",
            color: "#fcf6bd",
          }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <Typical
            steps={[
              "Damos vida a tu proyecto",
              1000,
              "Impulsamos tus ideas",
              1000,
              "Hacemos que tu negocio ¡DESPEGUE! 🚀",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default Slider;
