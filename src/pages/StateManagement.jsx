import React, { useState, useContext, createContext } from 'react';

// Create a context for the example
const ThemeContext = createContext(undefined);

const StateManagement = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: '', email: '' });
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [theme, setTheme] = useState('light');

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  const handleUserChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const addItem = () => {
    const newItem = prompt('Enter new item:');
    if (newItem?.trim()) {
      setItems((prev) => [...prev, newItem.trim()]);
    }
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center tracking-tight">
            React State Management
          </h1>

          {/* useState Section */}
          <section className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 md:mb-8 text-blue-600 dark:text-blue-400">
              useState Hook
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed max-w-prose">
              useState is a Hook that lets you add React state to function components. It returns a stateful value and a function to update it.
            </p>

            {/* Counter Example */}
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Counter Example</h3>
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6 flex-wrap">
                <button
                  onClick={handleDecrement}
                  className="min-w-[3rem] px-4 sm:px-6 py-2.5 sm:py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  -
                </button>
                <span className="text-2xl sm:text-3xl font-bold tabular-nums">{count}</span>
                <button
                  onClick={handleIncrement}
                  className="min-w-[3rem] px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  +
                </button>
              </div>
              <pre className="bg-gray-100 dark:bg-gray-700/50 p-4 sm:p-5 rounded-lg text-sm overflow-x-auto">
                <code>{`const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
};`}</code>
              </pre>
            </div>

            {/* Object State Example */}
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Object State Example</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 sm:mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => handleUserChange('name', e.target.value)}
                  className="px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => handleUserChange('email', e.target.value)}
                  className="px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              <div className="text-sm sm:text-base space-y-1 mb-4">
                <p><strong>Name:</strong> {user.name || 'Not provided'}</p>
                <p><strong>Email:</strong> {user.email || 'Not provided'}</p>
              </div>
              <pre className="bg-gray-100 dark:bg-gray-700/50 p-4 sm:p-5 rounded-lg text-sm overflow-x-auto">
                <code>{`const [user, setUser] = useState({ name: '', email: '' });

const handleUserChange = (field, value) => {
    setUser(prevUser => ({
        ...prevUser,
        [field]: value
    }));
};`}</code>
              </pre>
            </div>

            {/* Array State Example */}
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Array State Example</h3>
              <button
                onClick={addItem}
                className="mb-5 sm:mb-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Add Item
              </button>
              <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <span className="font-medium">{item}</span>
                    <button
                      onClick={() => removeItem(index)}
                      className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <pre className="bg-gray-100 dark:bg-gray-700/50 p-4 sm:p-5 rounded-lg text-sm overflow-x-auto">
                <code>{`const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

const addItem = () => {
    setItems(prevItems => [...prevItems, newItem]);
};

const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
};`}</code>
              </pre>
            </div>
          </section>

          {/* useContext Section */}
          <section className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 md:mb-8 text-purple-600 dark:text-purple-400">
              useContext Hook
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed max-w-prose">
              useContext accepts a context object and returns the current context value for that context.
            </p>

            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Theme Context Example</h3>
              <ThemeConsumer />
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={toggleTheme}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Toggle Theme
                </button>
              </div>
              <pre className="mt-5 sm:mt-6 bg-gray-100 dark:bg-gray-700/50 p-4 sm:p-5 rounded-lg text-sm overflow-x-auto">
                <code>{`// Create context
const ThemeContext = createContext();

// Provider
<ThemeContext.Provider value={{ theme, toggleTheme }}>
    <App />
</ThemeContext.Provider>

// Consumer
const { theme } = useContext(ThemeContext);`}</code>
              </pre>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 md:mb-8 text-green-600 dark:text-green-400">
              Best Practices
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-blue-50 dark:bg-blue-950/40 p-5 sm:p-6 rounded-xl border-l-4 border-blue-500 dark:border-blue-400">
                <h3 className="font-semibold text-lg sm:text-xl mb-3">useState Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Use functional updates when new state depends on previous state</li>
                  <li>Keep state simple and primitive when possible</li>
                  <li>Avoid putting derived values in state</li>
                  <li>Use multiple state variables for unrelated values</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/40 p-5 sm:p-6 rounded-xl border-l-4 border-purple-500 dark:border-purple-400">
                <h3 className="font-semibold text-lg sm:text-xl mb-3">useContext Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Use context for global state that changes infrequently</li>
                  <li>Split context into multiple contexts for better performance</li>
                  <li>Avoid putting functions that change on every render in context</li>
                  <li>Consider using useReducer for complex state logic</li>
                </ul>
              </div>
            </div>
          </section>

          {/* When to Use What */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 md:mb-8 text-orange-600 dark:text-orange-400">
              When to Use What
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-green-50 dark:bg-green-950/40 p-5 sm:p-6 lg:p-7 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg sm:text-xl mb-3 text-green-700 dark:text-green-300">
                  Use useState When:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Component-local state</li>
                  <li>Simple state values</li>
                  <li>State that doesn't need to be shared</li>
                  <li>Form inputs and UI state</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/40 p-5 sm:p-6 lg:p-7 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg sm:text-xl mb-3 text-yellow-700 dark:text-yellow-300">
                  Use useContext When:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Global state needed across components</li>
                  <li>Theme, authentication, language settings</li>
                  <li>Avoiding prop drilling</li>
                  <li>State that many components need to access</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

// Consumer component for context example
const ThemeConsumer = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;

  return (
    <div
      className={`p-4 sm:p-5 rounded-lg ${
        theme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-900'
      }`}
    >
      <p className="text-base sm:text-lg">
        Current theme: <strong>{theme}</strong>
      </p>
      <p className="mt-2 text-sm sm:text-base">This component consumes the theme context.</p>
    </div>
  );
};

export default StateManagement;