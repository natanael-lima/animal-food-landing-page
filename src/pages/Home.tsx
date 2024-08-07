import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import ProductList from '../components/ProductList';
import SliderLogos from '../components/SliderLogos';


export default function Home() {
  return (
    <div>
      <Header />
      <main className='top-30'>
        {/* Sección Hero */}
        <section id="home">
        <Hero/>
        </section>
        {/* Otras secciones */}
        <ProductList/>
        <SliderLogos/>
        <About />
        <Contact/>
      </main>
      
    </div>
  )
}

