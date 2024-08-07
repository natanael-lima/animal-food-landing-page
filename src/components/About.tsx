import React from 'react'
import imageAbout from '../assets/images/dog3.png'; 

export default function About() {
  return (
        <section id="about" className="py-16 bg-yellow-200 flex items-center justify-center">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <img
                    alt=""
                    src={imageAbout}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                    eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                    quidem quam repellat.
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded-full bg-yellow-500 px-12 py-3 text-sm font-medium text-white transition hover:text-yellow-100 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
        </section>
  )
}
