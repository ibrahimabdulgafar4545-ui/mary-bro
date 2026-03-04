import React from 'react';

const About = () => {
  return (
    <div className="animate-fadeIn max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-primary tracking-tight">
          About This Project
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 md:mb-10 leading-relaxed text-balance max-w-prose">
          This application is a demonstration of modern React development techniques, focusing on clean architecture, elegant design, and smooth user experience. Powered by Tailwind CSS for rapid and scalable styling.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          <div className="p-5 sm:p-6 md:p-7 bg-card-bg border border-border rounded-xl text-center shadow-sm hover:shadow transition-shadow duration-200">
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-primary">100%</span>
            <span className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mt-2 block">
              Responsive
            </span>
          </div>

          <div className="p-5 sm:p-6 md:p-7 bg-card-bg border border-border rounded-xl text-center shadow-sm hover:shadow transition-shadow duration-200">
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-primary">React 19</span>
            <span className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mt-2 block">
              Framework
            </span>
          </div>

          <div className="p-5 sm:p-6 md:p-7 bg-card-bg border border-border rounded-xl text-center shadow-sm hover:shadow transition-shadow duration-200">
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Vite</span>
            <span className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mt-2 block">
              Build Tool
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;