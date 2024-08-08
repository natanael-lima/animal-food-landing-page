import { useState, useEffect } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`p-4 fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-amber-500' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <button onClick={() => scrollToSection('home')} className="hover:text-gray-400">
            <img src={logo} alt="PETNOW Logo" className="h-8 w-auto" />
          </button>
        </div>

        {/* Toggle Button for Mobile */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden p-2 text-yellow-100 hover:text-gray-700 focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Menu and Message Button for Large Screens */}
        <div className={`fixed inset-0 flex-grow lg:flex bg-black bg-opacity-50 lg:bg-transparent lg:static lg:items-center lg:justify-center lg:space-x-4 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 p-4 lg:p-0 bg-yellow-600 lg:bg-transparent">
            <li>
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-50 text-yellow-100 font-semibold rounded-full px-4 py-2">HOME</button>
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
             {/* Message Button inside menu for Mobile */}
             {menuOpen && (
              <li className="mt-4 lg:mt-0">
                <button className="text-yellow-700 px-4 py-2 rounded-full hover:bg-gray-50 bg-yellow-100 font-semibold w-full text-center">SEND MESSAGE</button>
              </li>
            )}
          </ul>
        </div>

         {/* Message Button */}
         <div className="hidden lg:flex lg:items-center lg:ml-auto">
          <button className="px-4 py-2 rounded-full bg-amber-50 text-amber-500 hover:bg-amber-600 hover:text-amber-50 font-semibold">SEND MESSAGE</button>
        </div>
         {/* Close Button for Mobile */}
         {menuOpen && (
          <button 
            onClick={() => setMenuOpen(false)} 
            className="lg:hidden p-2 absolute top-4 right-4 text-yellow-100 hover:text-gray-400"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </nav>
    </header>
  )
}
