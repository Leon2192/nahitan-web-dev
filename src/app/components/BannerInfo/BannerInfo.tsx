import React from "react";

const BannerInfo = () => {
  return (
    <div
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative "
      style={{ backgroundImage: "url('/banners/bannerspace.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
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
        <h4
          className="text-white text-3xl font-bold"
          style={{
            width: "80%",
          }}
        >
          Trabajamos en diversos proyectos tanto para las mejores marcas, como
          para las startups que tienen la ambición de crecer en un mercado
          competitivo y altamente cambiante. Conocé a algunos de nuestros
          favoritos:
        </h4>
        {/* Otra mitad para agregar contenido opcional */}
      </div>
    </div>
  );
};

export default BannerInfo;
