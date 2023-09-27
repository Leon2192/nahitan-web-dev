import React from "react";

const InfoServices = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 text-center">
        <img src="/logo.png" alt="Imagen" className="mx-auto" />
      </div>
      <div className="w-1/2 text-center mr-20">
        <p className="text-4xl font-semibold">Nos enfocamos en la excelencia</p>
        <br />
        
        <p className="text-md font-semibold">
          En Nahitan, nos enorgullece ofrecer una gama de servicios de diseño y
          desarrollo web que combinan creatividad, innovación y un enfoque
          centrado en la estética visual. Nuestro compromiso es transformar tus
          ideas en experiencias web que cautiven a tus visitantes y dejen una
          impresión duradera.
        </p>
      </div>
    </div>
  );
};

export default InfoServices;
