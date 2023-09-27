import React from "react";

const InfoAbout = () => {
  return (
    <div className="flex items-center mt-20">
      <div className="w-1/2 text-center ml-5">
        <p className="text-5xl font-semibold">Mision</p>
        <br />
        <p className="text-md font-semibold">
          En Nahitan, nuestra misión es llevar la creatividad y la innovación a
          la vanguardia del mundo digital. Nos dedicamos a diseñar y desarrollar
          experiencias web de alto impacto visual que cautiven a nuestra
          audiencia y superen las expectativas de nuestros clientes. Nuestro
          compromiso con la calidad y la excelencia nos impulsa a crear
          soluciones web que no solo sean hermosas, sino también altamente
          funcionales y efectivas. Estamos decididos a ser líderes en la
          industria, transformando ideas en realidades digitales que dejen una
          impresión duradera.
        </p>
        <br />  
        <p className="text-5xl font-semibold ">Vision</p>
        <br />
        <p className="text-md font-semibold">
          Nuestra visión es ser reconocidos como un referente en la industria
          del diseño y desarrollo web, donde la creatividad y la calidad son los
          pilares fundamentales de nuestro trabajo. Buscamos ser el socio
          preferido de empresas y emprendedores que buscan sobresalir en línea,
          brindando soluciones web que generen un alto impacto visual y ayuden a
          alcanzar sus metas de negocio. Nos esforzamos por continuar innovando,
          creciendo y expandiendo nuestra influencia global, manteniendo siempre
          nuestro compromiso con la excelencia y la satisfacción del cliente.
          Con cada proyecto, nos acercamos un paso más a nuestra visión de un
          mundo digital impresionante y de calidad excepcional.
        </p>
      </div>
      <div className="w-1/2 text-center">
        <img src="/logo.png" alt="Imagen" className="mx-auto" />
      </div>
    </div>
  );
};

export default InfoAbout;
