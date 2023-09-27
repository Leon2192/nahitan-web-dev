import BannerInfoServicios from "@/app/components/BannerInfo/BannerInfoServicios/BannerInfoServicios";
import React from "react";
import CardsServices from "../components/CardsServices/CardsServices";
import InfoServices from "../components/InfoServices/InfoServices";

const page = () => {
  return (
    <div>
      <BannerInfoServicios />
      <CardsServices />
      <InfoServices />
    </div>
  );
};

export default page;
