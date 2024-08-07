//import { Link } from 'react-router-dom'; // Para la navegación en la aplicación
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/pet-now-without-back.png'; // Cambia esta ruta según la ubicación de tu logo
export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Cambia el valor según sea necesario
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`p-4 fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-amber-500' : 'bg-transparent'}`}>
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">
          <button onClick={() => scrollToSection('home')} className="hover:text-gray-400">
            <img src={logo} alt="PETNOW Logo" className="h-8 w-auto" />
          </button>
      </div>
      {/* Menu */}
      <ul className="flex flex-grow justify-center space-x-4">
        <li>
          <button onClick={() => scrollToSection('home')} className="hover:text-gray-50 text-yellow-100 font-semibold rounded-full px-4 py-2">HOME </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-50 text-yellow-100 font-semibold rounded-full px-4 py-2">ABOUT US</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('products')} className="hover:text-gray-50 text-yellow-100 font-semibold rounded-full px-4 py-2">PRODUCTS</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('sliderproducts')} className="hover:text-gray-50 text-yellow-100 font-semibold rounded-full px-4 py-2">DEALS</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-50 text-yellow-100 font-semibold rounded-full px-4 py-2">CONTACT US</button>
        </li>
      </ul>
      
      {/* Message Button */}
      <div>
        <button className="text-yellow-700 px-4 py-2 rounded-full hover:bg-gray-50 bg-yellow-100 font-semibold">SEND MESSAGE</button>
      </div>
    </nav>
  </header>
  )
}
