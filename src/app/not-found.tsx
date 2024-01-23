"use client";

import Navbar from "@/components/Navigation/Navbar/Navbar";

function HomePage() {
  return (
    <>
      <header className="bg-black">
        <Navbar></Navbar>
      </header>

      <main>
        <div className="flex flex-grow items-center justify-center">
          <div className="rounded-lg bg-gray-800 p-8 text-center shadow-xl">
            <h1 className="mb-4 text-4xl font-bold text-white">Error 404</h1>
            <p className="text-gray-400">
              La página que estás buscando no existe, ¡Volvamos al inicio!
            </p>
            <a
              href="/"
              className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            >
              Regresar
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
