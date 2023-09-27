import BannerInfoAbout from "@/app/components/BannerInfo/BannerInfoAbout/BannerInfoAbout";
import React from "react";
import CardsAbout from "../components/CardsAbout/CardsAbout";
import InfoAbout from "../components/InfoAbout/InfoAbout";

const page = () => {
  return (
    <div>
      <BannerInfoAbout />
      <CardsAbout />
      <InfoAbout />
    </div>
  );
};

export default page;
