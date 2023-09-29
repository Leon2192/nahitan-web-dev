"use client";

import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-blue-900 text-white">
      {/* Background Shape */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 opacity-50 h-20 md:h-40"></div>

      <div className="container mx-auto py-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="mb-4 text-lg font-semibold uppercase">Contacto</h6>
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline w-5 h-5 mr-2 text-blue-500"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              nahitanweb@gmail.com
            </p>
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline w-5 h-5 mr-2 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +54 11 27682286
            </p>
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp inline w-5 h-5 mr-2 text-blue-500"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
              </svg>
              +54 11 27682286 (Whatsapp)
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Creamos tu web, potenciamos tu marca
              </a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 text-lg font-semibold uppercase">
              Más información
            </h6>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                ¿Por qué elegirnos?
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Trabajá con nosotros
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Plan de acción
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Cotizá tu proyecto
              </a>
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h6 className="mb-4 text-lg font-semibold uppercase">
              Redes sociales
            </h6>
            <div className="flex flex-col items-center space-y-4">
              {/* Centra verticalmente y ajusta el espacio vertical */}
              <a href="#!" className="text-blue-500 hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Icono de la red social */}
                </svg>
              </a>
              <a href="#!" className="text-blue-500 hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Icono de la red social */}
                </svg>
              </a>
              <a href="#!" className="text-blue-500 hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Icono de la red social */}
                </svg>
              </a>
              <a href="#!" className="text-blue-500 hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Icono de la red social */}
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h6 className="mb-4 text-lg font-semibold uppercase">
              Conozcámonos más
            </h6>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Trabajá con nosotros
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Nuestro equipo
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Nuestra historia
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Noticias
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nahitan Web. Todos los derechos
            reservados.
          </p>
        </div>
      </div>

      {showArrow && (
        <div
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full cursor-pointer shadow-md"
          onClick={scrollUp}
        >
          <MdKeyboardArrowUp className="w-6 h-6" />
        </div>
      )}
    </footer>
  );
};

export default Footer;
