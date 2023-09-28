"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Slider = () => {
  <Typewriter
    options={{
      strings: ["Texto de ejemplo"],
      autoStart: true,
      loop: true,
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString("Este es el texto que se escribirá en el efecto")
        .start();
    }}
  />;

  return (
    <div
      className="flex items-center w-[100%] h-[700px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bannerhome2.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="p-6 mt-40">
        <br />
        <br />
        <h2
          className="text-white text-6xl font-bold mt-20"
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
        <h4
          className="text-white text-3xl font-bold"
          style={{
            width: "100%",
            color: "#fcf6bd",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Damos vida a tus proyectos",
                "Posicionamos tu marca",
                "Hacemos que tu negocio ¡Despegue!🚀",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
      </div>
    </div>
  );
};

export default Slider;
