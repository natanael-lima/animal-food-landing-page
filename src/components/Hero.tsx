import React from 'react'
import '../index.css'; // Asegúrate de importar el archivo CSS aquí
import dogImage from '../assets/images/dog.png'; // Ajusta la ruta si es necesario

export default function Hero() {
  return (
    <section className="hero-container">
    {/* Imagen del fondo con desenfoque */}
    <div className="hero-background"></div>
      {/* Opcional: Superposición para mejorar el contraste del texto */}
      <div className="hero-overlay"></div>
    {/* Imagen del perro */}
    <img 
      src={dogImage} 
      alt="Dog" 
      className="hero-image" // Clase CSS para la imagen del perro
    />
    {/* Contenido central */}
    <div className="hero-content">
        <h1 className="font-bold leading-tight mb-4">
          WELCOME PET NOW
        </h1>
        <p className="text-2xl md:text-4xl leading-relaxed">
          Nutrición para tus mascotas. Las encuentras aquí.
        </p>
      </div>

    {/* Botones de redes sociales */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
      <a href="#" className="bg-gray-900 text-white rounded-full p-3 hover:bg-gray-700">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="bg-gray-900 text-white rounded-full p-3 hover:bg-gray-700">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="bg-gray-900 text-white rounded-full p-3 hover:bg-gray-700">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </section>
  )
}
