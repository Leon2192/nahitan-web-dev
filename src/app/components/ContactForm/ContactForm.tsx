"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="text-center mt-8 mb-8 ">
      <h2 className="text-5xl font-semibold mb-4">Contáctanos</h2>
      <br />
      <form className="mx-auto max-w-xl p-8 border border-white rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Tu nombre"
            required
            style={{ color: "#000" }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Correo electrónico"
            required
            style={{ color: "#000" }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Número de teléfono"
            required
            style={{ color: "#000" }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Escribe tu mensaje"
            required
            style={{ color: "#000" }}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
