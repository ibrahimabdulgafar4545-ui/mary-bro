import React, { useState } from 'react';

const UseState = () => {
    // Simple counter example
    const [count, setCount] = useState(0);
    
    // Text input example
    const [name, setName] = useState('');
    
    // Toggle example
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="max-w-3xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">useState Hook</h1>
            
            <p className="text-lg mb-8 text-center">
                useState lets you add state to your components. It's like a memory box for your component!
            </p>

            {/* Example 1: Counter */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">🔢 Counter Example</h2>
                <p className="mb-4">Click buttons to change the number:</p>
                
                <div className="flex items-center gap-4 mb-4">
                    <button 
                        onClick={() => setCount(count - 1)}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl"
                    >
                        -
                    </button>
                    <span className="text-3xl font-bold w-20 text-center">{count}</span>
                    <button 
                        onClick={() => setCount(count + 1)}
                        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xl"
                    >
                        +
                    </button>
                </div>
                
                <div className="bg-white p-4 rounded border">
                    <code className="text-sm">
                        const [count, setCount] = useState(0);
                    </code>
                </div>
            </div>

            {/* Example 2: Text Input */}
            <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">✏️ Text Input Example</h2>
                <p className="mb-4">Type your name below:</p>
                
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-4 text-lg"
                />
                
                {name && (
                    <div className="bg-white p-4 rounded border">
                        <p className="text-lg">Hello, <strong>{name}</strong>! 👋</p>
                    </div>
                )}
                
                <div className="bg-white p-4 rounded border mt-4">
                    <code className="text-sm">
                        const [name, setName] = useState('');
                    </code>
                </div>
            </div>

            {/* Example 3: Toggle */}
            <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">👁️ Show/Hide Example</h2>
                <p className="mb-4">Click the button to show or hide the secret message:</p>
                
                <button 
                    onClick={() => setIsVisible(!isVisible)}
                    className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 mb-4"
                >
                    {isVisible ? 'Hide' : 'Show'} Secret Message
                </button>
                
                {isVisible && (
                    <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
                        <p className="text-lg font-semibold">🎉 This is the secret message!</p>
                        <p>You can see it because isVisible is true!</p>
                    </div>
                )}
                
                <div className="bg-white p-4 rounded border mt-4">
                    <code className="text-sm">
                        const [isVisible, setIsVisible] = useState(true);
                    </code>
                </div>
            </div>

            {/* Key Points */}
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">📚 Key Points to Remember</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>useState returns two things: the current value and a function to update it</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>The argument to useState is the initial value</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>When you call the update function, React re-renders the component</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>You can store any type of data: numbers, strings, objects, arrays, booleans</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UseState;
