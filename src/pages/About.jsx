import React from 'react';

const About = () => {
    return (
        <div className="animate-fadeIn max-w-3xl mx-auto">
            <section className="py-12">
                <h2 className="text-4xl font-bold mb-6 text-primary">About This Project</h2>
                <p className="text-lg text-text-muted mb-8 leading-relaxed text-balance">
                    This application is a demonstration of modern React development techniques, focusing on clean architecture, elegant design, and smooth user experience. Powered by Tailwind CSS for rapid and scalable styling.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-6 bg-card-bg border border-border rounded-xl text-center">
                        <span className="block text-3xl font-bold text-primary">100%</span>
                        <span className="text-text-muted text-sm uppercase tracking-wider">Responsive</span>
                    </div>
                    <div className="p-6 bg-card-bg border border-border rounded-xl text-center">
                        <span className="block text-3xl font-bold text-primary">React 19</span>
                        <span className="text-text-muted text-sm uppercase tracking-wider">Framework</span>
                    </div>
                    <div className="p-6 bg-card-bg border border-border rounded-xl text-center">
                        <span className="block text-3xl font-bold text-primary">Vite</span>
                        <span className="text-text-muted text-sm uppercase tracking-wider">Build Tool</span>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
