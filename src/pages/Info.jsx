import React from 'react';
import { pages } from '../components/PageData';

const Info = () => {
  const { title, description } = pages.info;

  return (
    <div className="animate-fadeIn max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-primary tracking-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 md:mb-10 leading-relaxed text-balance max-w-prose">
          {description}
        </p>

        {/* additional content can go here */}
      </section>
    </div>
  );
};

export default Info;