import React from 'react';
import { pages } from '../components/PageData';

const Info = () => {
  const { title, description } = pages.info;
  return (
    <div className="animate-fadeIn max-w-3xl mx-auto">
      <section className="py-12">
        <h2 className="text-4xl font-bold mb-6 text-primary">{title}</h2>
        <p className="text-lg text-text-muted mb-8 leading-relaxed text-balance">
          {description}
        </p>
        {/* additional content can go here */}
      </section>
    </div>
  );
};

export default Info;
