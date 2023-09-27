import React from "react";

const BannerInfoContact = () => {
  return (
    <div
      className="flex items-center w-[100%] h-[600px] bg-cover bg-center relative "
      style={{ backgroundImage: "url('/bannerhome2.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="p-6">
        <h2
          className="text-white text-6xl font-bold"
          style={{
            color: "#00b4d8",
          }}
        >
          Contacto
        </h2>
        <br />
        <h4 className="text-white text-2xl font-bold" style={{
          width:'75%'
        }}>
          Consideramos que la comunicacion es un factor clave en nuestro flujo
          de trabajo. Por eso queremos brindarte soluciones de una manera super
          personalizada. Te pedimos que completes el formulario en esta seccion
          para que podamos ponernos en contacto con vos y poder iniciar tu
          proyecto juntos.
        </h4>
        {/* Otra mitad para agregar contenido opcional */}
      </div>
    </div>
  );
};

export default BannerInfoContact;
