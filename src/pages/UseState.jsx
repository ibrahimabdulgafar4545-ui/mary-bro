import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-blue-600 tracking-tight">
        useState Hook
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 lg:mb-12 text-center text-gray-700 max-w-3xl mx-auto">
        useState lets you add state to your components. It's like a memory box for your component!
      </p>

      {/* Example 1: Counter */}
      <div className="bg-blue-50 p-5 sm:p-6 md:p-8 rounded-xl mb-8 sm:mb-10 shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5 text-blue-800">
          🔢 Counter Example
        </h2>
        <p className="mb-4 sm:mb-6 text-gray-700 text-base sm:text-lg">
          Click buttons to change the number:
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-5 sm:mb-6">
          <button
            onClick={() => setCount(count - 1)}
            className="min-w-[3rem] sm:min-w-[4rem] px-5 sm:px-6 py-3 sm:py-3.5 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 text-lg sm:text-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            −
          </button>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold w-20 sm:w-24 md:w-28 text-center tabular-nums">
            {count}
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="min-w-[3rem] sm:min-w-[4rem] px-5 sm:px-6 py-3 sm:py-3.5 bg-green-500 text-white rounded-lg hover:bg-green-600 active:bg-green-700 text-lg sm:text-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            +
          </button>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 font-mono text-sm sm:text-base overflow-x-auto">
          <code className="text-blue-700">const [count, setCount] = useState(0);</code>
        </div>
      </div>

      {/* Example 2: Text Input */}
      <div className="bg-green-50 p-5 sm:p-6 md:p-8 rounded-xl mb-8 sm:mb-10 shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5 text-green-800">
          ✏️ Text Input Example
        </h2>
        <p className="mb-4 sm:mb-6 text-gray-700 text-base sm:text-lg">
          Type your name below:
        </p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 sm:py-3.5 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none text-base sm:text-lg transition-colors"
        />

        {name && (
          <div className="mt-4 sm:mt-5 bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-base sm:text-lg md:text-xl">
              Hello, <strong className="text-green-700">{name}</strong>! 👋
            </p>
          </div>
        )}

        <div className="mt-5 sm:mt-6 bg-white p-4 sm:p-5 rounded-lg border border-gray-200 font-mono text-sm sm:text-base overflow-x-auto">
          <code className="text-green-700">const [name, setName] = useState('');</code>
        </div>
      </div>

      {/* Example 3: Toggle */}
      <div className="bg-purple-50 p-5 sm:p-6 md:p-8 rounded-xl mb-8 sm:mb-10 shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5 text-purple-800">
          👁️ Show/Hide Example
        </h2>
        <p className="mb-4 sm:mb-6 text-gray-700 text-base sm:text-lg">
          Click the button to show or hide the secret message:
        </p>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-5 sm:px-6 py-3 sm:py-3.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 active:bg-purple-700 text-base sm:text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 mb-4 sm:mb-6"
        >
          {isVisible ? 'Hide' : 'Show'} Secret Message
        </button>

        {isVisible && (
          <div className="bg-yellow-50 p-4 sm:p-5 rounded-lg border-2 border-yellow-300 shadow-sm">
            <p className="text-base sm:text-lg font-semibold text-yellow-800">🎉 This is the secret message!</p>
            <p className="mt-2 text-gray-700">You can see it because isVisible is true!</p>
          </div>
        )}

        <div className="mt-5 sm:mt-6 bg-white p-4 sm:p-5 rounded-lg border border-gray-200 font-mono text-sm sm:text-base overflow-x-auto">
          <code className="text-purple-700">const [isVisible, setIsVisible] = useState(true);</code>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">
          📚 Key Points to Remember
        </h2>
        <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 sm:mr-4 text-xl sm:text-2xl">•</span>
            useState returns two things: the current value and a function to update it
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 sm:mr-4 text-xl sm:text-2xl">•</span>
            The argument to useState is the initial value
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 sm:mr-4 text-xl sm:text-2xl">•</span>
            When you call the update function, React re-renders the component
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 sm:mr-4 text-xl sm:text-2xl">•</span>
            You can store any type of data: numbers, strings, objects, arrays, booleans
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseState;