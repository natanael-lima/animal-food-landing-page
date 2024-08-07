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
    // Agrega más productos aquí si es necesario
  ];

export default function ProductList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir al siguiente conjunto de productos
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Función para ir al conjunto de productos anterior
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Productos visibles en el carrusel
  const visibleProducts = products.slice(currentIndex, currentIndex + 3);
  return (
      <section id="sliderproducts" className="py-16 bg-yellow-100 text-center h-screen flex items-center justify-center">
          <div className="container mx-auto">
          <div className="relative">
        {/* Contenedor del carrusel */}
        <div className="flex overflow-hidden">
          {visibleProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full md:w-1/3 px-10 ">
              <div className="relative bg-amber-500 rounded-lg shadow-lg overflow-hidden">
                <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3x12 bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
                  OFF 10%
                </span>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-30 w-full object-cover rounded-bl-3xl rounded-tr-3xl transition-transform transform hover:scale-105"
                />
                {/* Contenido de la tarjeta */}
                    <div className="relative z-10 p-4 flex flex-col h-full">
                        {/* Fila superior con título, descripción y precio */}
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                        {/* Columna de descripción */}
                        <div className="flex flex-col w-full md:w-2/3 mb-4 md:mb-0">
                            <div className="mb-2">
                            <strong className="text-xl font-medium text-gray-100">{product.title}</strong>
                            </div>
                            <div>
                            <p className="text-gray-100">{product.description}</p>
                            </div>
                        </div>

                            {/* Columna del precio */}
                            <div className="text-gray-100 font-semibold text-2xl md:text-3xl w-full md:w-1/3">
                                ${product.price}
                            </div>
                        </div>

                        {/* Fila inferior con controles de cantidad y botón de compra */}
                        <div className="flex items-center justify-between mt-auto gap-4">
                        {/* Contenedor para controles de cantidad */}
                            <div>
                            <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                            <div className="flex items-center gap-1">
                                <button
                                type="button"
                                className="size-10 leading-10 text-gray-100 transition hover:opacity-75 text-gray-200"
                                >
                                -
                                </button>

                                <input
                                type="number"
                                id="Quantity"
                                value="1"
                               className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                />

                                <button
                                type="button"
                                className="size-10 leading-10 text-gray-100 transition hover:opacity-75 dark:text-gray-300"
                                >
                                +
                                </button>
                            </div>
                            </div>

                        {/* Botón de compra */}
                        <button className="bg-yellow-100 text-yellow-800 px-5 py-3 text-sm font-medium uppercase rounded-full transition-colors hover:bg-white">
                            BUY NOW
                        </button>
                        </div>
                    </div>
              </div>
            </div>
          ))}
        </div>

            {/* Botones de navegación */}
            <div className="absolute top-200 right-10 flex gap-2">
                <button
                    onClick={goToPrev}
                    className="bg-yellow-800 text-white p-3 rounded-full shadow-lg"
                >
                    &#10094;
                </button>
                <button
                    onClick={goToNext}
                    className="bg-yellow-800 text-white p-3 rounded-full shadow-lg"
                >
                    &#10095;
                </button>
            </div>
        </div>
        </div>
      </section>
  )
}
