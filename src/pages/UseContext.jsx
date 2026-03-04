import React, { useState, useContext, createContext } from 'react';

// Create a context
const ThemeContext = createContext(undefined);

const UseContext = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`
          min-h-screen
          ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}
        `}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-purple-600 tracking-tight">
            useContext Hook
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-center mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
            useContext lets components share data without passing props down through every level.
            It's like a global bulletin board that any component can read!
          </p>

          {/* Theme Switcher Section */}
          <section className="bg-purple-50 dark:bg-purple-950/40 p-5 sm:p-6 md:p-8 rounded-xl mb-10 md:mb-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6 text-purple-700 dark:text-purple-300">
              🎨 Theme Switcher
            </h2>
            <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
              Click the button to change the theme:
            </p>

            <ThemeSwitcher />

            <div className="mt-5 sm:mt-6 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm overflow-x-auto">
              <code>const ThemeContext = createContext();</code>
            </div>
          </section>

          {/* Demo Components */}
          <div className="grid gap-6 sm:gap-8 md:gap-10 mb-10 md:mb-12 grid-cols-1 md:grid-cols-3">
            <Header />
            <MainContent />
            <Footer />
          </div>

          {/* How it Works */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5 md:mb-7">
              🔧 How It Works
            </h2>
            <div className="space-y-5 md:space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-2 text-lg">Step 1: Create Context</h3>
                <code className="text-sm font-mono block">const ThemeContext = createContext();</code>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-2 text-lg">Step 2: Provide Context</h3>
                <pre className="text-sm font-mono overflow-x-auto">
                  &lt;ThemeContext.Provider value=&#123;&#123;theme, setTheme&#125;&#125;&gt;
                  <br />
                  &nbsp;&nbsp;&lt;App /&gt;
                  <br />
                  &lt;/ThemeContext.Provider&gt;
                </pre>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-2 text-lg">Step 3: Use Context</h3>
                <code className="text-sm font-mono block">
                  const &#123;theme, setTheme&#125; = useContext(ThemeContext);
                </code>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-blue-50 dark:bg-blue-950/30 p-5 sm:p-6 md:p-8 rounded-xl mt-10 md:mt-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5 md:mb-7">
              ✨ Benefits of useContext
            </h2>
            <ul className="space-y-3 md:space-y-4 text-base sm:text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-3 text-xl">•</span>
                <span>No more "prop drilling" — passing props through many levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-3 text-xl">•</span>
                <span>Perfect for global data like themes, user info, language</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-3 text-xl">•</span>
                <span>Any component can access the context data easily</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

// ────────────────────────────────────────────────

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, setTheme } = context;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`
        px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm
        ${theme === 'dark'
          ? 'bg-yellow-400 hover:bg-yellow-300 text-gray-900'
          : 'bg-gray-800 hover:bg-gray-700 text-white'}
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
      `}
    >
      Switch to {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Theme
    </button>
  );
};

const Header = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;

  return (
    <div
      className={`
        p-5 sm:p-6 rounded-xl shadow-sm
        ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}
      `}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Header Component</h3>
      <p>
        I know the current theme is: <strong>{theme}</strong>
      </p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
        I got this info from useContext!
      </p>
    </div>
  );
};

const MainContent = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;

  return (
    <div
      className={`
        p-5 sm:p-6 rounded-xl shadow-sm
        ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}
      `}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Main Content Component</h3>
      <p>
        I also know the theme is: <strong>{theme}</strong>
      </p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
        We're sharing the same context data!
      </p>
    </div>
  );
};

const Footer = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;

  return (
    <div
      className={`
        p-5 sm:p-6 rounded-xl shadow-sm
        ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}
      `}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Footer Component</h3>
      <p>
        And I know the theme is: <strong>{theme}</strong>
      </p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
        All three components use the same context!
      </p>
    </div>
  );
};

export default UseContext;