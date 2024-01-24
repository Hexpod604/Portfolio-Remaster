import { MetadataRoute } from 'next'

import PageIcon from "@/images/PortfolioIcon.png";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portafolio | Lautaro Spiazz',
    short_name: 'Portafolio | Lautaro Spiazz',
    description: 'Desarrollador web apasionado con 3 años de aprendizaje, tanto en front-end como en back-end, con un buen manejo en gran variedad de tecnologías presentes en la industria actual.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a2331',
    theme_color: '#1a2331',
    icons: [
      {
        src: PageIcon.src,
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}