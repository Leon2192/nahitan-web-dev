import React from "react";
import { GiBrain } from "react-icons/gi"; // Reemplaza con los iconos que desees
import { BsPalette } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const CardsAbout = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold mt-6 mb-4">Nuestro enfoque</h1>
      <br />
      <div className="flex justify-center items-center mb-2">
        <div className="bg-white h-1 w-60 rounded-full"></div>
      </div>
      <br />
      <div className="flex justify-between">
        <div className="w-1/3 p-4">
          <div className="text-center">
            <GiBrain className="text-8xl text-blue-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Creatividad</p>
            <p className="text-md font-semibold">
              Pensamos la mejor opción contemplando la competencia en el mercado
              sobre el rubro que posee tu proyecto para que tu sitio esté en la
              vanguardia.
            </p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="text-center">
            <BsPalette className="text-8xl text-green-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Diseño</p>
            <p className="text-md font-semibold">
              Nuestros proyectos se orientan a construir aplicaciones web de
              alto impacto visual.
            </p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="text-center">
            <BiTimeFive className="text-8xl text-red-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Solidez</p>
            <p className="text-md font-semibold">
              No alcanza con un aspecto llamativo, nuestro producto debe ser
              sólido y sostenible en el tiempo.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-2">
        <div className="bg-white h-1 w-20 rounded-full"></div>
      </div>
    </div>
  );
};

export default CardsAbout;
