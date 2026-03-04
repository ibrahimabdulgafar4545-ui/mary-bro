import React from 'react';
import { pages } from '../components/PageData';

const ReachOut = () => {
  const { title, description } = pages.reach;

  return (
    <div className="animate-fadeIn max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary text-center tracking-tight">
          {title}
        </h2>

        <p className="text-center text-text-muted mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-xl leading-relaxed text-balance max-w-prose mx-auto">
          {description}
        </p>

        {/* simple contact form or details could be added here */}
        {/* Example placeholder – feel free to replace */}
        <div className="max-w-lg mx-auto space-y-6 sm:space-y-8">
          {/* You can insert form fields here later */}
          <p className="text-center text-text-muted text-sm sm:text-base">
            Ready to get in touch? Drop your message below or email us directly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReachOut;