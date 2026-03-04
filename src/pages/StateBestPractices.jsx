import React, { useState } from 'react';

const StateBestPractices = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);

  const practices = [
    // ... (data remains unchanged)
  ];

  const doAndDont = [
    // ... (data remains unchanged)
  ];

  return (
    <div className="min-h-screen bg-gray-50/40 dark:bg-gray-950/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center text-red-600 dark:text-red-500 tracking-tight">
          State Management Best Practices
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto">
          Learn the right way to manage state in React! 🚀
        </p>

        {/* Interactive Practice Cards */}
        <section className="mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5 md:mb-6 text-gray-800 dark:text-gray-200">
            📚 Key Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {practices.map((practice) => (
              <div
                key={practice.id}
                className={`
                  bg-white dark:bg-gray-800/80 
                  p-5 sm:p-6 md:p-7 
                  rounded-xl shadow-md hover:shadow-xl 
                  transition-all duration-200 cursor-pointer
                  border border-gray-200 dark:border-gray-700
                `}
                onClick={() =>
                  setSelectedPractice(
                    selectedPractice?.id === practice.id ? null : practice.id
                  )
                }
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {practice.title}
                </h3>

                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <p className="text-green-700 dark:text-green-400 font-medium mb-2 text-sm sm:text-base">
                      ✅ Good:
                    </p>
                    <pre className="bg-green-50/70 dark:bg-green-950/40 p-3.5 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto leading-relaxed border border-green-200/50 dark:border-green-900/50">
                      <code>{practice.good}</code>
                    </pre>
                  </div>

                  <div>
                    <p className="text-red-700 dark:text-red-400 font-medium mb-2 text-sm sm:text-base">
                      ❌ Bad:
                    </p>
                    <pre className="bg-red-50/70 dark:bg-red-950/40 p-3.5 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto leading-relaxed border border-red-200/50 dark:border-red-900/50">
                      <code>{practice.bad}</code>
                    </pre>
                  </div>
                </div>

                {selectedPractice?.id === practice.id && (
                  <div className="mt-5 p-4 bg-blue-50/70 dark:bg-blue-950/30 rounded-lg text-sm sm:text-base">
                    <p className="text-gray-800 dark:text-gray-200">
                      <strong>Why:</strong> {practice.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12 lg:mb-16">
          {doAndDont.map((section, index) => (
            <div
              key={index}
              className={`
                p-5 sm:p-6 md:p-7 rounded-xl 
                ${section.title.includes('Do')
                  ? 'bg-green-50/80 dark:bg-green-950/30 border-green-200/60 dark:border-green-900/50'
                  : 'bg-red-50/80 dark:bg-red-950/30 border-red-200/60 dark:border-red-900/50'}
                border
              `}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-5">
                {section.title}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2.5 mt-0.5 text-lg sm:text-xl flex-shrink-0">
                      {section.title.includes('Do') ? '✓' : '✗'}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Quiz & Performance Tips sections would follow similar pattern */}
        {/* ... (you can apply the same logic: smaller base sizes → sm: → md: → lg:) */}
      </div>
    </div>
  );
};

// StateQuiz remains mostly the same, just needs minor responsive tweaks:

const StateQuiz = () => {
  // ... state & questions unchanged ...

  if (showResult) {
    return (
      <div className="text-center py-6 px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quiz Complete! 🎉</h3>
        <p className="text-lg sm:text-xl mb-6">
          Your score: {score} / {questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="px-5 sm:px-6 py-2.5 sm:py-3 bg-yellow-500 hover:bg-yellow-600 
                     text-white font-medium rounded-lg text-sm sm:text-base 
                     transition-colors duration-200 shadow-sm hover:shadow"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="px-1 sm:px-2">
      <h3 className="font-semibold text-base sm:text-lg mb-3 md:mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h3>
      <p className="mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
        {questions[currentQuestion].question}
      </p>
      <div className="space-y-2.5 sm:space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`
              w-full text-left p-3.5 sm:p-4 
              bg-white dark:bg-gray-800 
              hover:bg-gray-100 dark:hover:bg-gray-700 
              border border-gray-300 dark:border-gray-600 
              rounded-lg text-sm sm:text-base 
              transition-colors duration-150
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StateBestPractices;