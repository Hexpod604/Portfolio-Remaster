"use client";

export default function DownloadButton() {
  return (
    <button className="hvr-grow-rotate bg-blue-800 hover:bg-blue-900 text-gray-100 font-semibold px-3 py-2 sm:px-4 rounded inline-flex items-center duration-100">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Descargar CV</span>
    </button>
  );
}
