"use client";

import Atropos from "atropos/react";
import "atropos/css";

import StartedButton from "@/components/Buttons/StartedButton";
import DownloadButton from "@/components/Buttons/DownloadButton";
import Navbar from "@/components/Navigation/Navbar/Navbar";

export default function Header() {
  return (
    <section className="bg-black">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-2 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Lautaro Spiazzi
          </h1>
          <h2 className="max-w-2xl mb-4 font-semibold md:text-2xl xl:text-3xl text-yellow-300">
            Desarrollador web
          </h2>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300">
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
          <div className="flex items-center justify-start gap-3">
            <StartedButton></StartedButton>
            <DownloadButton></DownloadButton>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Atropos className="my-atropos" shadow={false} highlight={false}>
            <img
              className="rounded-full"
              src="https://cdn.discordapp.com/attachments/808747427959930921/1199037701899432026/pfplau.png?ex=65c115e1&is=65aea0e1&hm=2c1424347be108e3011fd1d353eac52cb53903f8432e03bf119384c5b2bace18&"
              alt="mockup"
            />
          </Atropos>
          {/* <img
            className="rounded-full"
            src="https://cdn.discordapp.com/attachments/808747427959930921/1199037701899432026/pfplau.png?ex=65c115e1&is=65aea0e1&hm=2c1424347be108e3011fd1d353eac52cb53903f8432e03bf119384c5b2bace18&"
            alt="mockup"
          /> */}
        </div>
      </div>
    </section>
  );
}
