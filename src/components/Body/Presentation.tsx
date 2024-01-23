"use client";

import Link from "next/link";

export default function Presentation() {
  return (
    <section id="aboutme">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-0">
        <div className="max-w-screen-lg sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
            Acerca de mi persona
          </h2>
          <p className="mb-1">
            Me presento, soy <span className="font-semibold text-gray-300">Lautaro Spiazzi</span>, y cumplo los roles de
            desarrollador web tanto{" "}
            <span className="font-semibold text-yellow-200">Front-End</span>{" "}
            como <span className="font-semibold text-yellow-200">Back-End</span>
            .
          </p>
          <p className="mb-1">
            Habito en la localidad de{" "}
            <span className="font-semibold text-gray-300">Entre Rios, Argentina</span>, con
            una edad de 15 años, logré abrirme un espacio para desarrollar{" "}
            <span className="font-semibold text-gray-300">sitios web</span> en base a la{" "}
            <span className="font-semibold text-sky-400">creatividad</span> y la{" "}
            <span className="font-semibold text-sky-400">funcionalidad</span>.
          </p>
          <p className="mb-4">
            Con <span className="font-semibold text-gray-300">4 años de aprendizaje</span> en
            el desarrollo, mi enfoque no solo se centra en la creación de sitios
            web visualmente atractivos, sino también en la construcción de{" "}
            <span className="font-semibold text-sky-400">sólidas arquitecturas</span> y{" "}
            <span className="font-semibold text-sky-400">funcionalidades</span> que optimicen
            la <span className="font-semibold text-yellow-200">experiencia del usuario</span>{" "}
            y permitan una visita memorable a su sitio.
          </p>
          <Link
            href="#contact"
            className="inline-flex gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 duration-100 rounded-lg items-center font-medium text-gray-100"
          >
            Contactarme
            <svg
              fill="#ffffff"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>paper-plane</title>{" "}
                <path d="M31.117 1.445c-0.009-0.018-0.026-0.029-0.036-0.046-0.069-0.131-0.155-0.243-0.258-0.338l-0.001-0.001c-0.028-0.019-0.063-0.039-0.098-0.057l-0.007-0.003c-0.021-0.015-0.029-0.043-0.052-0.057-0.030-0.019-0.067-0.013-0.099-0.030-0.131-0.071-0.285-0.12-0.448-0.136l-0.005-0c-0.035-0.007-0.079-0.013-0.123-0.016l-0.004-0c-0.211 0.001-0.409 0.055-0.582 0.15l0.006-0.003c-0.010 0.005-0.022 0.002-0.032 0.008l-27.999 16c-0.379 0.219-0.63 0.623-0.63 1.085 0 0.5 0.294 0.932 0.719 1.132l0.008 0.003 9.273 4.28v6.585c0 0.473 0.263 0.884 0.65 1.096l0.007 0.003c0.172 0.095 0.376 0.15 0.594 0.15 0.255 0 0.492-0.077 0.69-0.208l-0.005 0.003 6.027-3.955 8.764 4.045c0.153 0.072 0.333 0.115 0.523 0.115 0.659 0 1.198-0.509 1.246-1.156l0-0.004 2-28.001c0.002-0.023-0.013-0.042-0.013-0.065 0.001-0.016 0.001-0.035 0.001-0.054 0-0.191-0.043-0.372-0.121-0.533l0.003 0.007zM24.16 6.777l-12.511 14.3-6.922-3.195zM13.25 27.686v-3.117l2.788 1.287zM26.883 28.107l-7.663-3.537c-0.026-0.014-0.038-0.042-0.065-0.055l-5.115-2.373 14.448-16.514z"></path>{" "}
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
