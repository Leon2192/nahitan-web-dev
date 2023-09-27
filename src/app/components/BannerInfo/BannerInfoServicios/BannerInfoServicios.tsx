import React from "react";

const BannerInfoServicios = () => {
  return (
    <div
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative "
      style={{ backgroundImage: "url('/bannerhome3.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="p-6">
        <h2 className="text-white text-6xl font-bold" style={{
          color:'#e9ff70'
        }}>Nuestros servicios</h2>
        <br />
        <h4 className="text-white text-2xl font-bold" style={{
          width:'75%'
        }}>
          Estamos listos para convertir tus ideas en realidad en línea.
          Ofrecemos una gama completa de servicios que abarcan desde la
          concepción y el diseño creativo hasta la implementación técnica y el
          mantenimiento continuo.
        </h4>
        {/* Otra mitad para agregar contenido opcional */}
      </div>
    </div>
  );
};

export default BannerInfoServicios;
