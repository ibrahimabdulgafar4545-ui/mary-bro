import React from 'react';
import { pages } from '../components/PageData';

const ReachOut = () => {
  const { title, description } = pages.reach;
  return (
    <div className="animate-fadeIn max-w-2xl mx-auto">
      <section className="py-12">
        <h2 className="text-4xl font-bold mb-4 text-primary text-center">{title}</h2>
        <p className="text-center text-text-muted mb-12 text-lg text-balance">
          {description}
        </p>
        {/* simple contact form or details could be added here */}
      </section>
    </div>
  );
};

export default ReachOut;
