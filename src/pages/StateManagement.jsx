import React, { useState, useContext, createContext } from 'react';

// Create a context for the example
const ThemeContext = createContext();

const StateManagement = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: '', email: '' });
    const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
    const [theme, setTheme] = useState('light');

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const handleUserChange = (field, value) => {
        setUser(prevUser => ({
            ...prevUser,
            [field]: value
        }));
    };

    const addItem = () => {
        const newItem = prompt('Enter new item:');
        if (newItem) {
            setItems(prevItems => [...prevItems, newItem]);
        }
    };

    const removeItem = (index) => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-center">React State Management</h1>
                    
                    {/* useState Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-blue-600">useState Hook</h2>
                        <p className="mb-6 text-lg">
                            useState is a Hook that lets you add React state to function components. 
                            It returns a stateful value and a function to update it.
                        </p>

                        {/* Counter Example */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
                            <h3 className="text-xl font-semibold mb-4">Counter Example</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <button 
                                    onClick={handleDecrement}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                >
                                    -
                                </button>
                                <span className="text-2xl font-bold">{count}</span>
                                <button 
                                    onClick={handleIncrement}
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                                >
                                    +
                                </button>
                            </div>
                            <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded overflow-x-auto">
                                <code>{`const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
};`}</code>
                            </pre>
                        </div>

                        {/* Object State Example */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
                            <h3 className="text-xl font-semibold mb-4">Object State Example</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={user.name}
                                    onChange={(e) => handleUserChange('name', e.target.value)}
                                    className="px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={(e) => handleUserChange('email', e.target.value)}
                                    className="px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                            </div>
                            <div className="mb-4">
                                <strong>Name:</strong> {user.name || 'Not provided'}<br />
                                <strong>Email:</strong> {user.email || 'Not provided'}
                            </div>
                            <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded overflow-x-auto">
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
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
                            <h3 className="text-xl font-semibold mb-4">Array State Example</h3>
                            <button 
                                onClick={addItem}
                                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            >
                                Add Item
                            </button>
                            <ul className="mb-4 space-y-2">
                                {items.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded">
                                        <span>{item}</span>
                                        <button 
                                            onClick={() => removeItem(index)}
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded overflow-x-auto">
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
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-purple-600">useContext Hook</h2>
                        <p className="mb-6 text-lg">
                            useContext accepts a context object (the value returned from React.createContext) 
                            and returns the current context value for that context.
                        </p>

                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Theme Context Example</h3>
                            <ThemeConsumer />
                            <div className="mt-4">
                                <button 
                                    onClick={toggleTheme}
                                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                                >
                                    Toggle Theme
                                </button>
                            </div>
                            <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded overflow-x-auto mt-4">
                                <code>{`// Create context
const ThemeContext = createContext();

// Provider component
<ThemeContext.Provider value={{ theme, toggleTheme }}>
    <App />
</ThemeContext.Provider>

// Consumer component
const theme = useContext(ThemeContext);`}</code>
                            </pre>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-green-600">Best Practices</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold mb-2">useState Best Practices</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Use functional updates when new state depends on previous state</li>
                                    <li>Keep state simple and primitive when possible</li>
                                    <li>Avoid putting derived values in state</li>
                                    <li>Use multiple state variables for unrelated values</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-semibold mb-2">useContext Best Practices</h3>
                                <ul className="list-disc list-inside space-y-1">
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
                        <h2 className="text-3xl font-semibold mb-6 text-orange-600">When to Use What</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                                <h3 className="font-semibold mb-3 text-green-700 dark:text-green-300">Use useState When:</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Component-local state</li>
                                    <li>Simple state values</li>
                                    <li>State that doesn't need to be shared</li>
                                    <li>Form inputs and UI state</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
                                <h3 className="font-semibold mb-3 text-yellow-700 dark:text-yellow-300">Use useContext When:</h3>
                                <ul className="list-disc list-inside space-y-2">
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
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <p>Current theme: <strong>{theme}</strong></p>
            <p>This component consumes the theme context.</p>
        </div>
    );
};

export default StateManagement;
