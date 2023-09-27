import React from "react";

const BannerInfoAbout = () => {
  return (
    <div
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative "
      style={{ backgroundImage: "url('/banners/bannerspace3.png')" }}
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
            width: "75%",
          }}
        >
          En Nahitan, creemos que el éxito de nuestros clientes es nuestro
          propio éxito. Estamos comprometidos a brindarte un servicio
          excepcional y a llevar tus ideas al siguiente nivel. Cuando trabajas
          con nosotros, no solo obtienes un sitio web, obtienes una asociación
          para el éxito a largo plazo. Esta breve presentación destaca la
          pasión, la experiencia y el compromiso de la agencia de diseño y
          desarrollo web, así como su enfoque en la personalización y el éxito
          del cliente.
        </h4>
      </div>
    </div>
  );
};

export default BannerInfoAbout;
