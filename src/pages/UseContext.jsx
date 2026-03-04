import React, { useState, useContext, createContext } from 'react';

// Create a context - this is like a global storage box
const ThemeContext = createContext();

const UseContext = () => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`max-w-3xl mx-auto px-6 py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">useContext Hook</h1>
                
                <p className="text-lg mb-8 text-center">
                    useContext lets components share data without passing props down through every level.
                    It's like a global bulletin board that any component can read!
                </p>

                {/* Theme Switcher */}
                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-4">🎨 Theme Switcher</h2>
                    <p className="mb-4">Click the button to change the theme:</p>
                    
                    <ThemeSwitcher />
                    
                    <div className="bg-white p-4 rounded border mt-4">
                        <code className="text-sm">
                            const ThemeContext = createContext();
                        </code>
                    </div>
                </div>

                {/* Components that use the context */}
                <div className="space-y-6 mb-8">
                    <Header />
                    <MainContent />
                    <Footer />
                </div>

                {/* How it works */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">🔧 How It Works</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-semibold mb-2">Step 1: Create Context</h3>
                            <code className="text-sm">
                                const ThemeContext = createContext();
                            </code>
                        </div>
                        
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-semibold mb-2">Step 2: Provide Context</h3>
                            <code className="text-sm">
                                &lt;ThemeContext.Provider value={'{theme, setTheme}'}&gt;<br />
                                &nbsp;&nbsp;&lt;App /&gt;<br />
                                &lt;/ThemeContext.Provider&gt;
                            </code>
                        </div>
                        
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-semibold mb-2">Step 3: Use Context</h3>
                            <code className="text-sm">
                                const {'{theme, setTheme}'} = useContext(ThemeContext);
                            </code>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4">✨ Benefits of useContext</h2>
                    <ul className="space-y-2 text-lg">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>No more "prop drilling" - passing props through many levels</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Perfect for global data like themes, user info, language</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Any component can access the context data easily</span>
                        </li>
                    </ul>
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

// Component that uses the context
const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                theme === 'dark' 
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
        >
            Switch to {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Theme
        </button>
    );
};

// Header component that uses context
const Header = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-xl font-semibold">Header Component</h3>
            <p>I know the current theme is: <strong>{theme}</strong></p>
            <p className="text-sm text-gray-600">I got this info from useContext!</p>
        </div>
    );
};

// Main content component that uses context
const MainContent = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-xl font-semibold">Main Content Component</h3>
            <p>I also know the theme is: <strong>{theme}</strong></p>
            <p className="text-sm text-gray-600">We're sharing the same context data!</p>
        </div>
    );
};

// Footer component that uses context
const Footer = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-xl font-semibold">Footer Component</h3>
            <p>And I know the theme is: <strong>{theme}</strong></p>
            <p className="text-sm text-gray-600">All three components use the same context!</p>
        </div>
    );
};

export default UseContext;
