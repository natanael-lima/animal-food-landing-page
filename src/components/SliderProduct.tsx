import React, {useState} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Datos de ejemplo para los productos
const products = [
  {
    id: 1,
    imageUrl: 'https://www.purina.com.ar/sites/default/files/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png',
    title: 'Dog Chow 1',
    description: 'Description for product 1',
    price: '1000',
  },
  {
    id: 2,
    imageUrl: 'https://www.purina.com.ar/sites/default/files/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png',
    title: 'Dog Chow 2',
    description: 'Description for product 2',
    price: '1000',
  },
  {
    id: 3,
    imageUrl: 'https://www.purina.com.ar/sites/default/files/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png',
    title: 'Dog Chow 3',
    description: 'Description for product 3',
    price: '1000',
  },
  {
    id: 4,
    imageUrl: 'https://www.purina.com.ar/sites/default/files/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png',
    title: 'Dog Chow 4',
    description: 'Description for product 4',
    price: '1000',
  },
  {
    id: 5,
    imageUrl: 'https://www.purina.com.ar/sites/default/files/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png',
    title: 'Dog Chow 5',
    description: 'Description for product 5',
    price: '1000',
  },
  {
    id: 6,
    imageUrl: 'https://www.purina.com.ar/sites/default/files/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png',
    title: 'Dog Chow 6',
    description: 'Description for product 6',
    price: '1000',
  },
  {
    id: 7,
    imageUrl: 'https://www.purina.com.ar/sites/default/files/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png',
    title: 'Dog Chow 7',
    description: 'Description for product 7',
    price: '1000',
  },
  // Agrega más productos aquí si es necesario
];

export default function ProductList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = window.innerWidth < 768 ? 1 : 3; // Muestra una tarjeta en dispositivos móviles y dos en pantallas grandes
  // Función para ir al siguiente conjunto de productos
  const goToNext = () => {
    if (currentIndex < products.length - 2) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  // Función para ir al conjunto de productos anterior
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Ajusta el estilo del contenedor y los productos
  const containerStyle = {
    transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <section id="sliderproducts" className="py-16 bg-amber-50 text-center h-screen flex items-center justify-center">
    <div className="container mx-auto relative">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Discounted Products</h2>
      </header>

      <div className="mt-8">
        {/* Contenedor del carrusel */}
        <div className="relative overflow-hidden w-full">
          <div className="flex w-full" style={containerStyle}>
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 lg:px-20 px-4">
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <span className="absolute -right-0 -top-0 rounded-bl-3xl rounded-tr-3xl bg-red-600 px-4 py-2 text-xs font-medium uppercase text-white">
                    OFF 10%
                  </span>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-80 w-full object-cover transition-transform transform group-hover:scale-105"
                  />
                  {/* Contenido de la tarjeta */}
                  <div className="relative z-10 p-4 flex flex-col h-full">
                    {/* Fila superior con título, descripción y precio */}
                    <div className="flex flex-col mb-4">
                      <strong className="text-lg font-medium text-gray-900">{product.title}</strong>
                      <p className="text-gray-700">{product.description}</p>
                      <p className="mt-1.5 text-sm text-gray-700"> ${product.price} ARS</p>
                    </div>

                    {/* Fila inferior con controles de cantidad y botón de compra */}
                    <div className="flex items-center justify-between mt-auto gap-4">
                      {/* Contenedor para controles de cantidad */}
                      <div>
                        <label htmlFor="Quantity" className="sr-only">Quantity</label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-200"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            id="Quantity"
                            value="1"
                            className="h-10 w-16 rounded border-gray-300 text-center sm:text-sm"
                          />
                          <button
                            type="button"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Botón de compra */}
                      <button className="bg-amber-500 text-white px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-amber-600">
                         Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <div className="absolute top-1/2 left-4 flex gap-2 transform -translate-y-1/2">
            <button
              onClick={goToPrev}
              className={`bg-yellow-800 text-white p-3 rounded-full shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentIndex === 0}
            >
              &#10094;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 flex gap-2 transform -translate-y-1/2">
            <button
              onClick={goToNext}
              className={`bg-yellow-800 text-white p-3 rounded-full shadow-lg ${currentIndex >= products.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentIndex >= products.length - 3}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}