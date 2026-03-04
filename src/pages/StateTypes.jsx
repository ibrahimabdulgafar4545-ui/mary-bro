import React, { useState } from 'react';

const StateTypes = () => {
  const [activeTab, setActiveTab] = useState('local');

  const tabs = [
    { id: 'local', label: 'Local State', icon: '🏠' },
    { id: 'context', label: 'Context', icon: '🌐' },
    { id: 'global', label: 'Global State', icon: '🌍' },
    { id: 'server', label: 'Server State', icon: '☁️' },
  ];

  const renderContent = () => {
    switch (activeTab) {
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
    <div className="min-h-screen bg-gray-50/50 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center text-indigo-700 tracking-tight">
          Types of State Management
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-10 max-w-3xl mx-auto">
          Different types of state for different needs. Let's explore them all! 🎯
        </p>

        {/* Tab Navigation - scrollable on very small screens */}
        <div className="mb-8 md:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex justify-center sm:justify-center gap-2 sm:gap-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-shrink-0 inline-flex items-center gap-2 
                  px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 
                  rounded-lg font-medium text-sm sm:text-base
                  transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-md scale-102 sm:scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                <span className="text-lg sm:text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 md:p-8 lg:p-10">
          {renderContent()}
        </div>

        {/* Comparison Table */}
        <div className="mt-10 sm:mt-12 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5 md:mb-6 text-gray-800">
              📊 Quick Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border-b border-gray-200 p-3 sm:p-4 font-semibold">Type</th>
                    <th className="border-b border-gray-200 p-3 sm:p-4 font-semibold">Best For</th>
                    <th className="border-b border-gray-200 p-3 sm:p-4 font-semibold hidden sm:table-cell">
                      Example
                    </th>
                    <th className="border-b border-gray-200 p-3 sm:p-4 font-semibold">Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 sm:p-4 font-medium">🏠 Local</td>
                    <td className="p-3 sm:p-4 text-gray-600">Single component data</td>
                    <td className="p-3 sm:p-4 text-gray-600 hidden sm:table-cell">
                      Form inputs, toggles
                    </td>
                    <td className="p-3 sm:p-4 text-gray-600">useState, useReducer</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 sm:p-4 font-medium">🌐 Context</td>
                    <td className="p-3 sm:p-4 text-gray-600">Sharing between components</td>
                    <td className="p-3 sm:p-4 text-gray-600 hidden sm:table-cell">
                      Theme, user info
                    </td>
                    <td className="p-3 sm:p-4 text-gray-600">useContext, createContext</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-medium">🌍 Global</td>
                    <td className="p-3 sm:p-4 text-gray-600">App-wide state</td>
                    <td className="p-3 sm:p-4 text-gray-600 hidden sm:table-cell">
                      Shopping cart, auth
                    </td>
                    <td className="p-3 sm:p-4 text-gray-600">Redux, Zustand</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 sm:p-4 font-medium">☁️ Server</td>
                    <td className="p-3 sm:p-4 text-gray-600">Remote data</td>
                    <td className="p-3 sm:p-4 text-gray-600 hidden sm:table-cell">
                      API data, caching
                    </td>
                    <td className="p-3 sm:p-4 text-gray-600">React Query, SWR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────
   Example Components – added some responsiveness
─────────────────────────────────────────────── */

const LocalStateExample = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-5 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
        🏠 Local State (useState)
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">
        State that belongs to a single component. Perfect for:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm sm:text-base pl-1">
        <li>Form inputs</li>
        <li>UI toggles (show/hide)</li>
        <li>Component-specific data</li>
      </ul>

      <div className="bg-blue-50/60 p-5 sm:p-6 rounded-xl border border-blue-100">
        <h4 className="font-medium mb-4 text-blue-800">Try it:</h4>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none text-sm sm:text-base"
        />
        <p className="mt-3 text-gray-700 text-sm sm:text-base">
          You typed: <span className="font-medium">{text || 'Nothing yet...'}</span>
        </p>

        <div className="mt-6">
          <button
            onClick={() => setCount(count + 1)}
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
          >
            Clicked {count} times
          </button>
        </div>
      </div>
    </div>
  );
};

// The other example components can follow a similar pattern
// (increased spacing, better typography scale, improved input/button sizes)

const ContextStateExample = () => { /* ... similar improvements ... */ };
const GlobalStateExample = () => { /* ... */ };
const ServerStateExample = () => { /* ... */ };

export default StateTypes;