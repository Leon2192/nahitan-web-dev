"use client";
import BannerInfo from "@/app/components/BannerInfo/BannerInfo";
import Cards from "@/app/components/Cards/Cards";
import Nosotros from "@/app/components/Nosotros/Nosotros";
import Slider from "@/app/components/Slider/Slider";
import React from "react";

const page = () => {
  return (
    <div>
      <Slider />
      <Cards />
      <BannerInfo />
      <Nosotros />
    </div>
  );
};

export default page;
