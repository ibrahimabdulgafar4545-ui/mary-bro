import React, { useState } from 'react';

const StateTypes = () => {
    const [activeTab, setActiveTab] = useState('local');

    const tabs = [
        { id: 'local', label: 'Local State', icon: '🏠' },
        { id: 'context', label: 'Context', icon: '🌐' },
        { id: 'global', label: 'Global State', icon: '🌍' },
        { id: 'server', label: 'Server State', icon: '☁️' }
    ];

    const renderContent = () => {
        switch(activeTab) {
            case 'local':
                return <LocalStateExample />;
            case 'context':
                return <ContextStateExample />;
            case 'global':
                return <GlobalStateExample />;
            case 'server':
                return <ServerStateExample />;
            default:
                return <LocalStateExample />;
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Types of State Management</h1>
            
            <p className="text-lg mb-8 text-center">
                Different types of state for different needs. Let's explore them all! 🎯
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            activeTab === tab.id 
                                ? 'bg-indigo-500 text-white scale-105' 
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                {renderContent()}
            </div>

            {/* Comparison Table */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">📊 Quick Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-3 text-left">Type</th>
                                <th className="border p-3 text-left">Best For</th>
                                <th className="border p-3 text-left">Example</th>
                                <th className="border p-3 text-left">Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3 font-semibold">🏠 Local</td>
                                <td className="border p-3">Single component data</td>
                                <td className="border p-3">Form inputs, toggles</td>
                                <td className="border p-3">useState, useReducer</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border p-3 font-semibold">🌐 Context</td>
                                <td className="border p-3">Sharing between components</td>
                                <td className="border p-3">Theme, user info</td>
                                <td className="border p-3">useContext, createContext</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">🌍 Global</td>
                                <td className="border p-3">App-wide state</td>
                                <td className="border p-3">Shopping cart, auth</td>
                                <td className="border p-3">Redux, Zustand</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border p-3 font-semibold">☁️ Server</td>
                                <td className="border p-3">Remote data</td>
                                <td className="border p-3">API data, caching</td>
                                <td className="border p-3">React Query, SWR</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Local State Example
const LocalStateExample = () => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">🏠 Local State (useState)</h3>
            <p className="mb-4">State that belongs to a single component. Perfect for:</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Form inputs</li>
                <li>UI toggles (show/hide)</li>
                <li>Component-specific data</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Try it:</h4>
                <input
                    type="text"
                    placeholder="Type something..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full px-3 py-2 border rounded mb-3"
                />
                <p>You typed: {text || 'Nothing yet...'}</p>
                
                <div className="mt-4">
                    <button 
                        onClick={() => setCount(count + 1)}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Clicked {count} times
                    </button>
                </div>
            </div>
        </div>
    );
};

// Context State Example
const ContextStateExample = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">🌐 Context State (useContext)</h3>
            <p className="mb-4">Share state between components without prop drilling. Perfect for:</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Theme (light/dark mode)</li>
                <li>User authentication</li>
                <li>Language preferences</li>
            </ul>

            <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Example:</h4>
                <p>Context lets you share data across the component tree.</p>
                <div className="bg-white p-3 rounded mt-3">
                    <code className="text-sm">
                        const ThemeContext = createContext();<br/>
                        &lt;ThemeContext.Provider value={'{theme}'}&gt;<br/>
                        &nbsp;&nbsp;&lt;App /&gt;<br/>
                        &lt;/ThemeContext.Provider&gt;
                    </code>
                </div>
            </div>
        </div>
    );
};

// Global State Example
const GlobalStateExample = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">🌍 Global State</h3>
            <p className="mb-4">State that's accessible throughout the entire app. Perfect for:</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Shopping cart data</li>
                <li>User authentication status</li>
                <li>Application settings</li>
            </ul>

            <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Popular Tools:</h4>
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                        <strong>Redux:</strong> Powerful, predictable state management
                    </div>
                    <div className="bg-white p-3 rounded">
                        <strong>Zustand:</strong> Simple, lightweight state management
                    </div>
                    <div className="bg-white p-3 rounded">
                        <strong>Recoil:</strong> Facebook's experimental state library
                    </div>
                </div>
            </div>
        </div>
    );
};

// Server State Example
const ServerStateExample = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">☁️ Server State</h3>
            <p className="mb-4">Data that comes from a server. Perfect for:</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
                <li>API responses</li>
                <li>Database data</li>
                <li>Cached server responses</li>
            </ul>

            <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Popular Tools:</h4>
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                        <strong>React Query:</strong> Server state management with caching
                    </div>
                    <div className="bg-white p-3 rounded">
                        <strong>SWR:</strong> Data fetching library by Vercel
                    </div>
                    <div className="bg-white p-3 rounded">
                        <strong>Apollo Client:</strong> GraphQL state management
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateTypes;
