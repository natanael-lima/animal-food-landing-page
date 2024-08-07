import React, {useState} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Datos de ejemplo para los productos
const products = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Aloe Vera',
    description: 'Description for product 1',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Product 2',
    description: 'Description for product 2',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Product 3',
    description: 'Description for product 3',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Product 3',
    description: 'Description for product 4',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Product 3',
    description: 'Description for product 5',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Product 3',
    description: 'Description for product 6',
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
      <section id="products" className="py-16 bg-yellow-100 text-center">
          <div className="container mx-auto">
          <div className="relative">
        {/* Contenedor del carrusel */}
        <div className="flex overflow-hidden">
          {visibleProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full md:w-1/3 px-4">
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
                  Save 10%
                </span>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-80 w-full object-cover rounded-bl-3xl rounded-tr-3xl border border-gray-300"
                />
                <div className="p-4 text-center">
                  <strong className="text-xl font-medium text-gray-900">{product.title}</strong>
                  <p className="mt-2 text-gray-700">{product.description}</p>
                  <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        >
          &#10095;
        </button>
      </div>
          {/* Galería de Fotos */}
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <div className="mt-8">
      <p className="text-sm text-gray-500">Showing <span> 4 </span> of 40</p>
    </div>

    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>
    </ul>

    <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a href="#" className="block size-8 rounded border border-gray-100 text-center leading-8">
          1
        </a>
      </li>

      <li className="block size-8 rounded border-black bg-black text-center leading-8 text-white">2</li>

      <li>
        <a href="#" className="block size-8 rounded border border-gray-100 text-center leading-8">
          3
        </a>
      </li>

      <li>
        <a href="#" className="block size-8 rounded border border-gray-100 text-center leading-8">
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  </div>
          
        </div>
      </section>
  )
}
