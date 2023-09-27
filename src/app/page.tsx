"use client";
import Image from "next/image";
import HomePage from "./HomePage/page";
import "./globals.css"; // Ruta a tu archivo CSS global
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider>
        <HomePage />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
