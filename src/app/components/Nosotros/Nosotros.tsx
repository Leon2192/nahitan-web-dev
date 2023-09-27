import React from "react";

const Nosotros = () => {
  return (
    <div className="h-[500px]  p-6 flex flex-col justify-center text-center">
      <h3 className="text-6xl font-bold" style={{
        color:'#aacc00'
      }}>¡HOLA!</h3>
      <br />
      <h4 className="text-2xl font-semibold mb-2">
        Somos Nahitan, hace varios años, comenzamos nuestro viaje como una
        agencia de diseño y desarrollo web con una visión clara: transformar
        ideas en experiencias digitales impactantes. Desde entonces, hemos
        dedicado nuestro tiempo y pasión a hacer precisamente eso.
      </h4>
      <br />
      <div className="flex justify-center items-center mb-2">
        <div className="bg-white h-1 w-10 rounded-full"></div>
      </div>
      <br />
      <h5 className="text-3xl font-medium mb-4">
        Nuestra Pasión por el Diseño y la Tecnología
      </h5>

      <br />
      <p className="text-lg ">
        En Nahitan, somos apasionados por el diseño creativo y la tecnología
        innovadora. Cada proyecto que emprendemos es una oportunidad para
        fusionar arte y funcionalidad, creando sitios web que no solo se ven
        impresionantes, sino que también funcionan de manera excepcional.
      </p>
    </div>
  );
};

export default Nosotros;
