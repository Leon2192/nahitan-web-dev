"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Slider = () => {
  return (
    <div
      className="flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bannerhome2.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="p-6 md:mt-48">
        {" "}
        {/* Aumentamos el valor de md:mt */}
        <br />
        <br />
        <h2
          className="text-white text-6xl font-bold mt-10 md:mt-20"
          style={{
            color: "#90e0ef",
          }}
        >
          Nahitan
        </h2>
        <h2
          className="text-white text-5xl font-bold mt-5"
          style={{ color: "#f72585" }}
        >
          Diseño y Desarrollo Web
        </h2>
        <br />
        <h2
          className="text-white text-3xl font-bold mt-5"
          style={{
            width: "100%",
            color: "#fcf6bd",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Le damos vida a tus proyectos",
                "Implementamos y potenciamos tus ideas",
                "Hacemos que tu negocio ¡Despegue!🚀",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
    </div>
  );
};

export default Slider;
