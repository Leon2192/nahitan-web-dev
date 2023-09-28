import React from "react";

const BannerInfoAbout = () => {
  return (
    <div
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative "
      style={{ backgroundImage: "url('/pcright.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="p-6">
        <h2
          className="text-white text-6xl font-bold"
          style={{
            color: "#eeef20",
          }}
        >
          Sobre nosotros
        </h2>
        <br />
        <h4
          className="text-white text-2xl font-bold"
          style={{
            width: "60%",
          }}
        >
          En Nahitan, creemos que el éxito de nuestros clientes es nuestro
          propio éxito. Estamos comprometidos a brindarte un servicio
          excepcional y a llevar tus ideas al siguiente nivel. Cuando trabajas
          con nosotros, no solo obtienes un sitio web, obtienes una asociación
          para el éxito a largo plazo.
        </h4>
      </div>
    </div>
  );
};

export default BannerInfoAbout;
