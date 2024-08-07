//import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ProductList() {

  return (
    <section id="products" className="py-16 bg-yellow-50 text-center h-auto h-screen">
    
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Pet Products Collection</h2>
      </header>
  
      <div className="mt-8">
        <p className="text-sm text-gray-500">Showing <span>4</span> of 4</p>
      </div>
  
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li>
          <a href="#" className="group relative block overflow-hidden border border-gray-100  rounded-md">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
  
            <img src="https://dojiw2m9tvv09.cloudfront.net/30336/product/pedigree-cachorro-pollo8678.JPG" alt="Dog Food" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
  
            <div className="relative  bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Dog Food</h3>
              <p className="mt-1.5 text-sm text-gray-700">$24.00 ARS</p>
              <form className="mt-4">
                <button className="rounded-full block w-full rounded bg-amber-500 p-4 text-sm font-medium transition hover:scale-105">Buy Now</button>
              </form>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group relative block overflow-hidden  border border-gray-100  rounded-md">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
  
            <img src="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00070646023881L.jpg" alt="Dog Food" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
  
            <div className="relative border border-gray-100 bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Dog Food</h3>
              <p className="mt-1.5 text-sm text-gray-700">$24.00 ARS</p>
              <form className="mt-4">
              <button className="rounded-full block w-full rounded bg-amber-500 p-4 text-sm font-medium transition hover:scale-105">Buy Now</button>
              </form>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group relative block overflow-hidden  border border-gray-100  rounded-md">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
  
            <img src="https://melopetandgarden.com/cdn/shop/files/111101968-min.jpg?v=1700078823" alt="Dog Food" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
  
            <div className="relative border border-gray-100 bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Dog Food</h3>
              <p className="mt-1.5 text-sm text-gray-700">$24.00 ARS</p>
              <form className="mt-4">
              <button className="rounded-full block w-full rounded bg-amber-500 p-4 text-sm font-medium transition hover:scale-105">Buy Now</button>
              </form>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group relative block overflow-hidden border border-gray-100  rounded-md">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
  
            <img src="https://res.cloudinary.com/riqra/image/upload/v1668553036/sellers/13/kdkoglazt22kie3xf5si.jpg" alt="Dog Food" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
  
            <div className="relative border border-gray-100 bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Dog Food</h3>
              <p className="mt-1.5 text-sm text-gray-700">$24.00 ARS</p>
              <form className="mt-4">
              <button className="rounded-full block w-full rounded bg-amber-500 p-4 text-sm font-medium transition hover:scale-105">Buy Now</button>
              </form>
            </div>
          </a>
        </li>
      </ul>
      
    </div>
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
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
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          1
        </a>
      </li>

      <li className="block size-8 rounded border-amber-600 bg-amber-600 text-center leading-8 text-white">
        2
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
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
  </section>
  )
}
