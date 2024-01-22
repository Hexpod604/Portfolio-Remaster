"use client";

export default function Presentation() {
  return (
    <section id="aboutme">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Acerca de mi persona
            {/* <span className="text-sky-400">Ar</span><span>ge</span><span className="text-yellow-300">n</span><span>ti</span><span className="text-sky-400">no</span> */}
          </h2>
          <p className="mb-1">
            Me presento, soy Lautaro Spiazzi, y cumplo los roles de desarrollador web tanto <span className="font-semibold text-yellow-200">Front-End</span> como <span className="font-semibold text-yellow-200">Back-End</span>.
           </p>
          <p className="mb-4">
            Habito en la localidad de <span className="font-semibold">Entre Rios, Argentina</span>, con una edad de 15 años, logré abrirme un espacio para desarrollar <span className="font-semibold">sitios web</span> en base a la <span className="font-semibold text-sky-400">creatividad</span> y la <span className="font-semibold text-sky-400">funcionalidad</span>.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Learn more
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
