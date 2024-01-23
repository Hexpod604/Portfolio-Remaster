import Image from "next/image";
import Link from "next/link";

import CloudBucks from "@/images/cloudbucks.png"
import CloudClips from "@/images/cloudclips.png"
import Npm from "@/images/npm.webp"

export default function Projects() {
  return (
    <section id="projects">
      <div className="py-8 px-4 mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl lg:px-0 lg:py-16">
        <h2 className="mb-8 text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-center text-white">
          Proyectos finalizados
        </h2>

        <div className="flex gap-6 justify-between items-stretch flex-wrap">
          <div className="mb-6 lg:mb-0 text-white flex-1 bg-gray-800 p-6 rounded-lg flex flex-col gap-3 justify-between translate-y-[6px] min-w-[250px]">
            <div className="relative overflow-hidden mb-3">
              <Image
                src={CloudBucks}
                alt="CloudBucks"
                className="h-52 w-full object-cover duration-300 hover:cursor-pointer hover:scale-[1.25] hover:rotate-[5deg] rounded-lg shadow-lg"
              />
            </div>
            <h5 className="text-lg font-bold">CloudyCoding | CloudBucks</h5>
            <div className="flex items-center justify-start text-sm font-medium gap-3">
              <span className="text-orange-600 font-semibold">HTML</span>
              <span className="text-sky-400 font-semibold">TailwindCSS</span>
            </div>
            <p className="text-neutral-300">
              Esta página rediseñada, permite la obtención de dinero virtual para un juego denominado "Roblox" o la recaudación de dólares estadounidenses a través de la visualización de publicidad.
            </p>
            <div>
              <Link
                href="https://cloudbucks.cloudycoding.co"
                target="_BLANK"
                className="w-fit text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center"
              >
                Visitar
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mb-6 lg:mb-0 text-white flex-1 bg-gray-800 p-6 rounded-lg flex flex-col gap-3 justify-between min-w-[250px]">
            <div className="relative overflow-hidden mb-3">
              <Image
                src={CloudClips}
                alt="CloudClips"
                className="h-52 w-full object-cover duration-300 hover:cursor-pointer hover:scale-[1.25] hover:rotate-[5deg] rounded-lg shadow-lg"
              />
            </div>

            <h5 className="text-lg font-bold">CloudyCoding | CloudClips</h5>
            <div className="flex items-center justify-start text-sm font-medium gap-3">
              <span className="text-orange-600 font-semibold">HTML</span>
              <span className="text-sky-400 font-semibold">TailwindCSS</span>
            </div>
            <p className="text-neutral-300">
              Sitio diseñado desde 0, adaptado a múltiples dispositivos. El objetivo de la página es permitir a los usuarios la descarga de contenido de diversas plataformas digitales.
            </p>
            <div>
              <Link
                href="https://cloudclips.cloudycoding.co"
                target="_BLANK"
                className="w-fit text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center"
              >
                Visitar
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mb-0 text-white flex-1 bg-gray-800 p-6 rounded-lg flex flex-col gap-3 justify-between translate-y-[6px] min-w-[250px]">
            <div className="relative overflow-hidden mb-3">
              <Image
                src={Npm}
                alt="Npm logo"
                className="h-52 w-full object-cover duration-300 hover:cursor-pointer hover:scale-[1.25] hover:rotate-[5deg] rounded-lg shadow-lg"
              />
            </div>

            <h5 className="text-lg font-bold">Request logger</h5>
            <div className="flex items-center justify-start text-sm font-medium gap-3">
              <span className="text-yellow-300 font-semibold">Javascript</span>
              <span className="text-green-300 font-semibold">NodeJS</span>
            </div>
            <p className="text-neutral-300">
              Este paquete diseñado para ExpressJS, permite el registro de solicitudes realizadas al servidor determinado, con el objetivo de permitir el correcto desarrollo y manejo de distintos métodos en las solicitudes.
            </p>
            <div className="flex items-center justify-start flex-wrap gap-3">
              <Link
                href="https://www.npmjs.com/package/@hexstudiosar/reqlogger"
                target="_BLANK"
                className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center"
              >
                Visitar
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <Link
                href="https://github.com/Hexpod604/Reqlogger"
                target="_BLANK"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 ocus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                Repositorio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
