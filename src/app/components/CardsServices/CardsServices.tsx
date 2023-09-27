import React from "react";
import { LiaPagerSolid } from "react-icons/lia"; // Reemplaza con los iconos que desees
import { MdWorkspacePremium } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CardsServices = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold mt-6 mb-4">Nuestros planes</h1>
      <div className="flex justify-between">
        <div className="w-1/3 p-4">
          <div className="text-center">
            <LiaPagerSolid className="text-8xl text-blue-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Landing Page</p>
            <p className="text-md font-semibold">
              Sitio web personalizado de una sola página que te ofrece la
              solución perfecta para destacar en línea y captar leads.
            </p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="text-center">
            <MdWorkspacePremium className="text-8xl text-green-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Diseño Web Premium</p>
            <p className="text-md font-semibold">
              Servicio completo de diseño web y desarrollo es la solución
              definitiva para llevar tu presencia en línea al siguiente nivel.
              Con una combinación perfecta de creatividad y experiencia técnica.
            </p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="text-center">
            <AiOutlineShoppingCart className="text-8xl text-red-500 mb-4 mx-auto" />
            <p className="text-4xl font-semibold mb-4">Diseño web Full</p>
            <p className="text-md font-semibold">
              Además del diseño y desarrollo, nos ocupamos de la optimización de
              motores de búsqueda (SEO), y llevamos tu proyecto al siguiente
              nivel para convertirse en un poderoso portal de ventas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsServices;
