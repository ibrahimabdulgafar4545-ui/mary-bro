import React, { useState } from 'react';

const StateBestPractices = () => {
    const [selectedPractice, setSelectedPractice] = useState(null);

    const practices = [
        {
            id: 1,
            title: "🎯 Keep State Simple",
            good: "const [count, setCount] = useState(0);",
            bad: "const [user, setUser] = useState({ name: '', email: '', age: 0, settings: { theme: 'light', notifications: true } });",
            explanation: "Start simple. You can always make it more complex later if needed."
        },
        {
            id: 2,
            title: "🔄 Use Functional Updates",
            good: "setCount(prev => prev + 1);",
            bad: "setCount(count + 1);",
            explanation: "Functional updates prevent bugs when the new state depends on the old state."
        },
        {
            id: 3,
            title: "📦 One State Per Concern",
            good: "const [name, setName] = useState('');\nconst [email, setEmail] = useState('');",
            bad: "const [formData, setFormData] = useState({ name: '', email: '' });",
            explanation: "Separate unrelated state into different variables."
        },
        {
            id: 4,
            title: "⚡ Avoid Derived State",
            good: "const fullName = `${firstName} ${lastName}`;",
            bad: "const [fullName, setFullName] = useState('');",
            explanation: "Calculate values on render instead of storing them in state."
        },
        {
            id: 5,
            title: "🏗️ Lift State Up",
            good: "Parent component holds the shared state",
            bad: "Child components try to sync their own state",
            explanation: "Move state to the nearest common ancestor when multiple components need it."
        },
        {
            id: 6,
            title: "🎨 Use Context for Global State",
            good: "ThemeContext for theme, AuthContext for user",
            bad: "Passing theme through 10 levels of props",
            explanation: "Use useContext to avoid prop drilling for global data."
        }
    ];

    const doAndDont = [
        {
            title: "✅ Do",
            items: [
                "Use useState for simple, component-local state",
                "Use functional updates when new state depends on old state",
                "Keep state structure flat and simple",
                "Use TypeScript for better type safety",
                "Consider useReducer for complex state logic",
                "Use useMemo for expensive calculations"
            ]
        },
        {
            title: "❌ Don't",
            items: [
                "Store derived values in state",
                "Mutate state directly (always use setters)",
                "Create deeply nested state objects",
                "Put functions that change on every render in context",
                "Use state for props that should be passed down",
                "Forget to handle loading and error states"
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-red-600">State Management Best Practices</h1>
            
            <p className="text-lg mb-8 text-center">
                Learn the right way to manage state in React! 🚀
            </p>

            {/* Interactive Practice Cards */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">📚 Key Practices</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {practices.map(practice => (
                        <div 
                            key={practice.id}
                            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                            onClick={() => setSelectedPractice(selectedPractice?.id === practice.id ? null : practice.id)}
                        >
                            <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
                            
                            <div className="space-y-3">
                                <div>
                                    <p className="text-green-600 font-semibold mb-1">✅ Good:</p>
                                    <pre className="bg-green-50 p-3 rounded text-sm overflow-x-auto">
                                        <code>{practice.good}</code>
                                    </pre>
                                </div>
                                
                                <div>
                                    <p className="text-red-600 font-semibold mb-1">❌ Bad:</p>
                                    <pre className="bg-red-50 p-3 rounded text-sm overflow-x-auto">
                                        <code>{practice.bad}</code>
                                    </pre>
                                </div>
                            </div>
                            
                            {selectedPractice?.id === practice.id && (
                                <div className="mt-4 p-3 bg-blue-50 rounded">
                                    <p className="text-sm"><strong>Why:</strong> {practice.explanation}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {doAndDont.map((section, index) => (
                    <div key={index} className={`p-6 rounded-lg ${section.title.includes('Do') ? 'bg-green-50' : 'bg-red-50'}`}>
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                    <span className="mr-2">{section.title.includes('Do') ? '✓' : '✗'}</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Interactive Quiz */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">🎯 Quick Quiz</h2>
                <StateQuiz />
            </div>

            {/* Performance Tips */}
            <div className="bg-purple-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">⚡ Performance Tips</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold mb-2">🚀 Optimize Re-renders</h4>
                        <p className="text-sm">Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold mb-2">📦 State Colocation</h4>
                        <p className="text-sm">Keep state as close to where it's used as possible.</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold mb-2">🔄 Lazy Loading</h4>
                        <p className="text-sm">Load components and state only when needed.</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold mb-2">🎯 Virtualization</h4>
                        <p className="text-sm">For large lists, only render visible items.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Quiz Component
const StateQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: "When should you use functional updates?",
            options: ["Always", "When new state depends on old state", "Never", "Only for numbers"],
            correct: 1
        },
        {
            question: "What is prop drilling?",
            options: ["Making holes in components", "Passing props through many levels", "Drilling into state", "A React bug"],
            correct: 1
        },
        {
            question: "Where should you keep derived state?",
            options: ["In useState", "In a separate variable", "In context", "Nowhere - calculate it on render"],
            correct: 3
        }
    ];

    const handleAnswer = (answerIndex) => {
        if (answerIndex === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    if (showResult) {
        return (
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Quiz Complete! 🎉</h3>
                <p className="text-lg mb-4">Your score: {score} / {questions.length}</p>
                <button 
                    onClick={resetQuiz}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div>
            <h3 className="font-semibold mb-3">
                Question {currentQuestion + 1} of {questions.length}
            </h3>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full text-left p-3 bg-white rounded hover:bg-gray-100 border"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StateBestPractices;
