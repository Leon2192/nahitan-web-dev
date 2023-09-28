"use client";
import React from "react";
const Slider = () => {
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
            width: "75%",
            color: "#fcf6bd",
          }}
        >
          Damos vida a tu proyecto
        </h4>
      </div>
    </div>
  );
};

export default Slider;
