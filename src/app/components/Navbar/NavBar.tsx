"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function NavBar() {
  <Typewriter
    options={{
      strings: ["Texto de ejemplo"],
      autoStart: true,
      loop: true,
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString("Este es el texto que se escribirá en el efecto")
        .start();
    }}
  />;
  return (
    <Navbar height="80px" maxWidth="full">
      {" "}
      {/* Ajusta la altura aquí */}
      <NavbarBrand>
        <Link href="/">
          <Image width={150} height={200} src="/logo.png" alt="Default Image" />{" "}
          {/* Ajusta el tamaño de la imagen aquí */}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link href="/about">Sobre nosotros</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/Services">Nuestros servicios</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/Contact">Contacto</Link>{" "}
          {/* Corregí "Contact" a "Contacto" */}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <Typewriter
              options={{
                strings: ["¡Cotizá tu proyecto por whatsapp!"],
                autoStart: true,
                loop: true,
              }}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
