import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '', category: 'personal' });
    const [searchTerm, setSearchTerm] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // Load notes from localStorage on component mount
    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        const savedTheme = localStorage.getItem('darkMode');
        
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
        
        if (savedTheme) {
            setDarkMode(JSON.parse(savedTheme));
        }
    }, []);

    // Save notes to localStorage whenever they change
    useEffect(() => {
        if (notes.length > 0 || localStorage.getItem('notes')) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    // Save theme preference
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const addNote = (e) => {
        e.preventDefault();
        if (newNote.title.trim() && newNote.content.trim()) {
            const note = {
                id: Date.now(),
                ...newNote,
                createdAt: new Date().toLocaleString(),
                color: getCategoryColor(newNote.category)
            };
            setNotes([note, ...notes]);
            setNewNote({ title: '', content: '', category: 'personal' });
        }
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const clearAllNotes = () => {
        if (window.confirm('Are you sure you want to delete all notes?')) {
            setNotes([]);
            localStorage.removeItem('notes');
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            personal: 'bg-blue-100 border-blue-300',
            work: 'bg-green-100 border-green-300',
            ideas: 'bg-yellow-100 border-yellow-300',
            important: 'bg-red-100 border-red-300'
        };
        return colors[category] || 'bg-gray-100 border-gray-300';
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`min-h-screen transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">📝 LocalStorage Notes</h1>
                    <p className="text-lg opacity-80">Your notes are saved in your browser - even after you close the tab!</p>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="mt-4 px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
                    >
                        {darkMode ? '☀️ Light' : '🌙 Dark'} Mode
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="lg:col-span-1">
                        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <h2 className="text-2xl font-semibold mb-6">✍️ Create Note</h2>
                            
                            <form onSubmit={addNote} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Title</label>
                                    <input
                                        type="text"
                                        value={newNote.title}
                                        onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        placeholder="Enter note title..."
                                        maxLength={50}
                                    />
                                    <p className="text-xs opacity-60 mt-1">{newNote.title.length}/50 characters</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Category</label>
                                    <select
                                        value={newNote.category}
                                        onChange={(e) => setNewNote({...newNote, category: e.target.value})}
                                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    >
                                        <option value="personal">🏠 Personal</option>
                                        <option value="work">💼 Work</option>
                                        <option value="ideas">💡 Ideas</option>
                                        <option value="important">⭐ Important</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Content</label>
                                    <textarea
                                        value={newNote.content}
                                        onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        placeholder="Write your note here..."
                                        rows={4}
                                        maxLength={200}
                                    />
                                    <p className="text-xs opacity-60 mt-1">{newNote.content.length}/200 characters</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                                >
                                    📌 Save Note
                                </button>
                            </form>

                            {/* Storage Info */}
                            <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                <h3 className="font-semibold mb-2">💾 Storage Info</h3>
                                <div className="space-y-1 text-sm">
                                    <p>Total notes: {notes.length}</p>
                                    <p>Storage used: ~{JSON.stringify(notes).length} characters</p>
                                    <p className="text-xs opacity-60">Data persists in browser localStorage</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notes Display Section */}
                    <div className="lg:col-span-2">
                        <div className={`p-6 rounded-xl shadow-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold">📚 Your Notes</h2>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Search notes..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                                    />
                                    {notes.length > 0 && (
                                        <button
                                            onClick={clearAllNotes}
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                        >
                                            🗑️ Clear All
                                        </button>
                                    )}
                                </div>
                            </div>

                            {filteredNotes.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📭</div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {searchTerm ? 'No notes found' : 'No notes yet'}
                                    </h3>
                                    <p className="opacity-60">
                                        {searchTerm ? 'Try a different search term' : 'Create your first note to get started!'}
                                    </p>
                                </div>
                            ) : (
                                <div className="grid gap-4 max-h-96 overflow-y-auto">
                                    {filteredNotes.map(note => (
                                        <div
                                            key={note.id}
                                            className={`p-4 rounded-lg border-2 ${note.color} transition-all hover:shadow-md`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-lg">{note.title}</h3>
                                                <button
                                                    onClick={() => deleteNote(note.id)}
                                                    className="text-red-500 hover:text-red-700 font-bold"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                            <p className="text-sm opacity-80 mb-2">{note.content}</p>
                                            <div className="flex justify-between items-center text-xs opacity-60">
                                                <span className="capitalize">📁 {note.category}</span>
                                                <span>🕒 {note.createdAt}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* How it Works */}
                        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <h3 className="text-xl font-semibold mb-4">🔧 How localStorage Works</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                                    <h4 className="font-semibold mb-2">✅ What localStorage does:</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• Stores data in the browser</li>
                                        <li>• Persists between sessions</li>
                                        <li>• No server required</li>
                                        <li>• Fast access to data</li>
                                    </ul>
                                </div>
                                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
                                    <h4 className="font-semibold mb-2">⚠️ Limitations:</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• ~5MB storage limit</li>
                                        <li>• Only stores strings</li>
                                        <li>• Not secure for sensitive data</li>
                                        <li>• Browser-specific only</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                                <h4 className="font-semibold mb-2">💡 Common Uses:</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white rounded-full text-sm">User preferences</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm">Shopping cart</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm">Theme settings</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm">Form drafts</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm">Cache data</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalStorage;
