import React, { useState } from 'react';

const WhyStateManagement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // ... (slides content unchanged)
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-green-700 tracking-tight">
          Why Do We Need State Management?
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto">
          State management is what makes your app interactive and alive. Let's explore why! 🚀
        </p>

        {/* ── Slideshow ──────────────────────────────────────────────── */}
        <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <button
              onClick={prevSlide}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm sm:text-base"
              aria-label="Previous slide"
            >
              ← Previous
            </button>

            <span className="text-sm font-medium text-gray-700">
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              onClick={nextSlide}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm sm:text-base"
              aria-label="Next slide"
            >
              Next →
            </button>
          </div>

          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              {slides[currentSlide].title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {slides[currentSlide].content}
            </p>
            <ul className="space-y-2.5 sm:space-y-3 text-gray-700">
              {slides[currentSlide].examples.map((example, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Real-World Examples ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          <div className="bg-yellow-50/70 p-5 sm:p-6 rounded-xl border border-yellow-100 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-yellow-800">🛒 Shopping Cart</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              A shopping cart needs state to remember:
            </p>
            <ul className="space-y-1.5 text-sm sm:text-base text-gray-600">
              <li>• Items added by user</li>
              <li>• Quantity of each item</li>
              <li>• Total price</li>
              <li>• Discount codes</li>
            </ul>
          </div>

          <div className="bg-pink-50/70 p-5 sm:p-6 rounded-xl border border-pink-100 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-pink-800">👤 User Profile</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              User profile needs state for:
            </p>
            <ul className="space-y-1.5 text-sm sm:text-base text-gray-600">
              <li>• Login status</li>
              <li>• User preferences</li>
              <li>• Profile information</li>
              <li>• Settings and themes</li>
            </ul>
          </div>
        </div>

        {/* ── Interactive Demo ───────────────────────────────────────── */}
        <div className="bg-green-50/70 p-5 sm:p-6 md:p-8 rounded-xl border border-green-100 shadow-sm mb-10 sm:mb-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-5 text-green-800">
            🎮 Try It Yourself!
          </h3>
          <ClickCounter />
        </div>

        {/* ── Key Benefits ───────────────────────────────────────────── */}
        <div className="bg-gray-100/80 p-5 sm:p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center sm:text-left">
            🎯 Key Benefits of State Management
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">Interactive UI</h4>
              <p className="text-sm text-gray-600">Users can click, type, and interact with your app</p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-green-700 mb-2">Data Persistence</h4>
              <p className="text-sm text-gray-600">App remembers data even as users navigate</p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-purple-700 mb-2">Real-time Updates</h4>
              <p className="text-sm text-gray-600">UI updates automatically when data changes</p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-orange-700 mb-2">Better UX</h4>
              <p className="text-sm text-gray-600">Creates smooth, responsive user experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const newCount = clicks + 1;
    setClicks(newCount);

    if (newCount === 1) setMessage('Great start! 🎉');
    else if (newCount === 5) setMessage("You're getting it! 🔥");
    else if (newCount === 10) setMessage('Amazing! ⭐');
    else if (newCount === 20) setMessage("You're a pro! 🏆");
    else setMessage('');
  };

  return (
    <div className="text-center py-2">
      <p className="text-sm sm:text-base mb-4 text-gray-700">
        Click the button and see how the state changes!
      </p>

      <button
        onClick={handleClick}
        className="px-5 sm:px-6 md:px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 text-base sm:text-lg"
      >
        Click me! <span className="font-bold">({clicks})</span>
      </button>

      {message && (
        <p className="mt-5 text-base sm:text-lg font-semibold text-green-700 animate-fade-in">
          {message}
        </p>
      )}
    </div>
  );
};

export default WhyStateManagement;