"use client";

import Atropos from "atropos/react";
import "atropos/css";

import StartedButton from "@/components/Buttons/StartedButton";
import DownloadButton from "@/components/Buttons/DownloadButton";

import ProfilePhoto from "@/images/profilePhoto.png";

import Image from "next/image";

export default function Header() {
  return (
    <section className="bg-black">
      <div className="flex md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 lg:px-0 mx-auto lg:gap-8 xl:gap-0 py-16">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 data-aos={"fade-out"} className="max-w-2xl mb-2 text-3xl sm:text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Lautaro Spiazzi
          </h1>
          <h2 data-aos={"flip-right"} data-aos-delay="350" className="max-w-2xl mb-4 font-semibold md:text-2xl xl:text-3xl text-yellow-300">
            Desarrollador web
          </h2>
          <p data-aos={"fade-in"} data-aos-delay="600" className="max-w-2xl mb-6 font-light lg:mb-8 text-md md:text-lg lg:text-xl text-gray-300">
            Combinando mi{" "}
            <span className="font-semibold text-indigo-400 hover:text-indigo-500">
              habilidad técnica
            </span>{" "}
            con una{" "}
            <span className="font-semibold text-sky-300 hover:text-sky-400">
              creatividad innovadora
            </span>
            , doy vida a proyectos únicos. Descubre cómo mis habilidades y
            dedicación pueden llevar tus ideas a un{" "}
            <span className="text-sky-300 hover:text-sky-400 font-semibold">
              nivel superior
            </span>
            .
          </p>
          <div data-aos={"fade-up"} data-aos-delay="600" className="flex items-center justify-start flex-wrap gap-3">
            <StartedButton></StartedButton>
            <DownloadButton></DownloadButton>
          </div>
        </div>
        <div data-aos={"fade-up"} data-aos-delay="600" className="hidden lg:mt-0 lg:flex">
          <Atropos className="my-atropos" shadow={false} highlight={false}>
            <Image
              className="rounded-full"
              src={ProfilePhoto}
              alt="Lautaro Spiazzi"
            />
          </Atropos>
        </div>
      </div>
    </section>
  );
}
