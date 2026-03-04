import React from 'react';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <header className="py-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient">Welcome to Marybro</h1>
        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">A beautiful exploration of modern web design with React Router and Tailwind CSS.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
            Get Started
          </button>
          <button className="px-6 py-3 border border-border hover:bg-border text-text font-semibold rounded-lg transition-all">
            Learn More
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-card-bg border border-border rounded-xl transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">Fast & Responsive</h3>
          <p className="text-text-muted">Built with Vite and React for ultimate performance and seamless mobile experience.</p>
        </div>
        <div className="p-8 bg-card-bg border border-border rounded-xl transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">Beautiful Design</h3>
          <p className="text-text-muted">Crafted with attention to detail, premium aesthetics, and modern glassmorphism.</p>
        </div>
        <div className="p-8 bg-card-bg border border-border rounded-xl transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">Seamless Navigation</h3>
          <p className="text-text-muted">Expertly handled by React Router DOM for a fluid, single-page experience.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
