"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <footer className="bg-black">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Lautaro Spiazzi
            </span>
          </Link>
          <ul className="flex flex-wrap gap-3 items-center mb-2 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <Link href="#start" className="hover:underline md:me-6">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline md:me-6">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#technologies" className="hover:underline md:me-6">
                Tecnologías
              </Link>
            </li>
            <li>
              <Link href="#aboutme" className="hover:underline md:me-6">
                Sobre mi
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          Desarrollado con ❤ por{" "}
          <Link href="/" className="hover:underline">
            Lautaro Spiazzi
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}
