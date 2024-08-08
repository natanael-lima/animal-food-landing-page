import React, { useState } from 'react';
export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario.
    console.log(`Email enviado: ${email}`);
    setEmail('');
  };
  return (
    <section id="contact" className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-amber-900 md:text-3xl">
           Join Our Mailing List
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
            </div>
            <button  type="submit"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-amber-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-yellow-900 hover:bg-amber-600 transition focus:outline-none focus:ring focus:ring-amber-400 w-full sm:w-auto mt-4 w-full sm:mt-0"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg
                    className="size-5 rtl:rotate-180 group-hover:text-yellow-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4 group-hover:text-amber-50"> Send </span>
              </button>
          </form>
        </div>
       
      </div>
       {/* Pie de página */}
      <footer className="mt-12 text-center text-gray-600">
        <p>Copyright © PETNOW 2024 by <a href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/">Natanael Lima</a>.</p>
      </footer>
    </section>
  );
}
