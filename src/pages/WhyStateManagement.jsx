import React, { useState } from 'react';

const WhyStateManagement = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "🏠 What is State?",
            content: "State is like the memory of your app. It remembers things like:",
            examples: [
                "What's in your shopping cart",
                "Whether a user is logged in",
                "The current theme (light/dark)",
                "Form data the user typed",
                "Which tab is active"
            ]
        },
        {
            title: "🤔 Why Do We Need It?",
            content: "Without state management, your app would be:",
            examples: [
                "Static and boring - nothing changes!",
                "Unable to remember user input",
                "Unable to show different content based on user actions",
                "Like a brochure instead of an interactive app"
            ]
        },
        {
            title: "🔄 State Changes Everything",
            content: "When state changes, React automatically:",
            examples: [
                "Re-renders the component",
                "Updates what the user sees",
                "Keeps the UI in sync with data",
                "Makes your app feel alive and responsive"
            ]
        },
        {
            title: "📦 Where Does State Live?",
            content: "State can live in different places:",
            examples: [
                "Local component state (useState)",
                "Shared between components (useContext)",
                "Global state (Redux, Zustand)",
                "Server state (React Query)"
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-green-600">Why Do We Need State Management?</h1>
            
            <p className="text-lg mb-8 text-center">
                State management is what makes your app interactive and alive. Let's explore why! 🚀
            </p>

            {/* Interactive Slideshow */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
                <div className="flex justify-between items-center mb-6">
                    <button 
                        onClick={prevSlide}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        ← Previous
                    </button>
                    <span className="text-sm font-semibold">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <button 
                        onClick={nextSlide}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Next →
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
                    <p className="text-lg mb-4">{slides[currentSlide].content}</p>
                    <ul className="space-y-2">
                        {slides[currentSlide].examples.map((example, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>{example}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Real-World Examples */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">🛒 Shopping Cart</h3>
                    <p className="mb-3">A shopping cart needs state to remember:</p>
                    <ul className="space-y-1 text-sm">
                        <li>• Items added by user</li>
                        <li>• Quantity of each item</li>
                        <li>• Total price</li>
                        <li>• Discount codes</li>
                    </ul>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">👤 User Profile</h3>
                    <p className="mb-3">User profile needs state for:</p>
                    <ul className="space-y-1 text-sm">
                        <li>• Login status</li>
                        <li>• User preferences</li>
                        <li>• Profile information</li>
                        <li>• Settings and themes</li>
                    </ul>
                </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">🎮 Try It Yourself!</h3>
                <ClickCounter />
            </div>

            {/* Key Benefits */}
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">🎯 Key Benefits of State Management</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-600">Interactive UI</h4>
                        <p className="text-sm">Users can click, type, and interact with your app</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-600">Data Persistence</h4>
                        <p className="text-sm">App remembers data even as users navigate</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-purple-600">Real-time Updates</h4>
                        <p className="text-sm">UI updates automatically when data changes</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-orange-600">Better UX</h4>
                        <p className="text-sm">Creates smooth, responsive user experiences</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple interactive component for demo
const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);
    const [message, setMessage] = useState('');

    const handleClick = () => {
        const newCount = clicks + 1;
        setClicks(newCount);
        
        if (newCount === 1) setMessage('Great start! 🎉');
        else if (newCount === 5) setMessage('You\'re getting it! 🔥');
        else if (newCount === 10) setMessage('Amazing! ⭐');
        else if (newCount === 20) setMessage('You\'re a pro! 🏆');
        else setMessage('');
    };

    return (
        <div className="text-center">
            <p className="mb-4">Click the button and see how the state changes!</p>
            <button 
                onClick={handleClick}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-4"
            >
                Click me! (Clicked {clicks} times)
            </button>
            {message && <p className="text-lg font-semibold text-green-600">{message}</p>}
        </div>
    );
};

export default WhyStateManagement;
