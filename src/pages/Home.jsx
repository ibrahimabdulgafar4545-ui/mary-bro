import React from 'react';

const Home = () => {
  return (
    <div className="animate-fadeIn px-4 sm:px-6 lg:px-8">
      <header className="py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent tracking-tight">
          Welcome to 👌Marybro!
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 md:mb-10 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          A beautiful exploration of modern web design with React Router and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-primary/20">
            Get Started
          </button>

          <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-border hover:bg-border/10 hover:border-border/80 text-text font-semibold rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-md active:bg-border/20">
            Learn More
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 lg:mt-20">
        <div className="p-6 sm:p-7 md:p-8 bg-card-bg border border-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-primary">Fast & Responsive</h3>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Built with Vite and React for ultimate performance and seamless mobile experience.
          </p>
        </div>

        <div className="p-6 sm:p-7 md:p-8 bg-card-bg border border-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-primary">Beautiful Design</h3>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Crafted with attention to detail, premium aesthetics, and modern glassmorphism.
          </p>
        </div>

        <div className="p-6 sm:p-7 md:p-8 bg-card-bg border border-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-primary">Seamless Navigation</h3>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Expertly handled by React Router DOM for a fluid, single-page experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;