import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', category: 'personal' });
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // ── localStorage logic remains unchanged ──
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    const savedTheme = localStorage.getItem('darkMode');
    if (savedNotes) setNotes(JSON.parse(savedNotes));
    if (savedTheme) setDarkMode(JSON.parse(savedTheme));
  }, []);

  useEffect(() => {
    if (notes.length > 0 || localStorage.getItem('notes')) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = (e) => {
    e.preventDefault();
    if (!newNote.title.trim() || !newNote.content.trim()) return;
    const note = {
      id: Date.now(),
      ...newNote,
      createdAt: new Date().toLocaleString(),
      color: getCategoryColor(newNote.category),
    };
    setNotes([note, ...notes]);
    setNewNote({ title: '', content: '', category: 'personal' });
  };

  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));

  const clearAllNotes = () => {
    if (window.confirm('Delete all notes?')) {
      setNotes([]);
      localStorage.removeItem('notes');
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      personal: 'bg-blue-100/70 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700',
      work: 'bg-green-100/70 dark:bg-green-900/30 border-green-300 dark:border-green-700',
      ideas: 'bg-yellow-100/70 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700',
      important: 'bg-red-100/70 dark:bg-red-900/30 border-red-300 dark:border-red-700',
    };
    return colors[category] || 'bg-gray-100/70 dark:bg-gray-800 border-gray-300 dark:border-gray-600';
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`
        min-h-screen transition-colors duration-300
        ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}
      `}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            📝 LocalStorage Notes
          </h1>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto">
            Your notes are saved in your browser — even after closing the tab!
          </p>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`
              mt-5 sm:mt-6 px-5 py-2.5 rounded-full font-medium text-sm sm:text-base
              transition-all duration-200 shadow-sm
              ${darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-purple-600 hover:bg-purple-700 text-white'}
            `}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {/* ── Form ── left column on lg+ */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div
              className={`
                p-5 sm:p-6 md:p-7 rounded-xl shadow-lg border
                ${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'}
                transition-colors duration-300
              `}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-5 md:mb-6">✍️ Create Note</h2>

              <form onSubmit={addNote} className="space-y-4 md:space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Title</label>
                  <input
                    type="text"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    className={`
                      w-full px-4 py-2.5 rounded-lg border text-sm sm:text-base
                      ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent transition
                    `}
                    placeholder="Note title..."
                    maxLength={50}
                  />
                  <p className="text-xs mt-1 opacity-70">
                    {newNote.title.length}/50
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Category</label>
                  <select
                    value={newNote.category}
                    onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
                    className={`
                      w-full px-4 py-2.5 rounded-lg border text-sm sm:text-base
                      ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    `}
                  >
                    <option value="personal">🏠 Personal</option>
                    <option value="work">💼 Work</option>
                    <option value="ideas">💡 Ideas</option>
                    <option value="important">⭐ Important</option>
                  </select>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Content</label>
                  <textarea
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                    className={`
                      w-full px-4 py-2.5 rounded-lg border resize-y min-h-[110px]
                      ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base
                    `}
                    placeholder="Write your note..."
                    rows={4}
                    maxLength={200}
                  />
                  <p className="text-xs mt-1 opacity-70">
                    {newNote.content.length}/200
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mt-2"
                >
                  📌 Save Note
                </button>
              </form>

              {/* Storage Info */}
              <div
                className={`
                  mt-6 p-4 rounded-lg text-sm
                  ${darkMode ? 'bg-gray-800/70' : 'bg-gray-100'}
                `}
              >
                <h3 className="font-semibold mb-2">💾 Storage Info</h3>
                <div className="space-y-1 opacity-90">
                  <p>Total notes: <strong>{notes.length}</strong></p>
                  <p>Approx. size: ~{JSON.stringify(notes).length} chars</p>
                  <p className="text-xs opacity-60 mt-2">Persisted in browser localStorage</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Notes + How it works ── right side (takes 2 columns on lg+) */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-6 md:space-y-7 lg:space-y-8">
            {/* Notes list */}
            <div
              className={`
                p-5 sm:p-6 md:p-7 rounded-xl shadow-lg border
                ${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'}
              `}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 md:mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold">📚 Your Notes</h2>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`
                      flex-1 px-4 py-2.5 rounded-lg border text-sm sm:text-base
                      ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    `}
                  />
                  {notes.length > 0 && (
                    <button
                      onClick={clearAllNotes}
                      className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium whitespace-nowrap"
                    >
                      🗑️ Clear All
                    </button>
                  )}
                </div>
              </div>

              {filteredNotes.length === 0 ? (
                <div className="text-center py-12 md:py-16">
                  <div className="text-6xl md:text-7xl mb-4">📭</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {searchTerm ? 'No notes found' : 'No notes yet'}
                  </h3>
                  <p className="opacity-70 text-sm sm:text-base">
                    {searchTerm
                      ? 'Try another search term'
                      : 'Create your first note to get started!'}
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 sm:gap-5 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto pr-1">
                  {filteredNotes.map((note) => (
                    <div
                      key={note.id}
                      className={`
                        p-4 sm:p-5 rounded-lg border-2 transition-all duration-200
                        hover:shadow-md hover:-translate-y-0.5
                        ${note.color}
                      `}
                    >
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <h3 className="font-semibold text-base sm:text-lg line-clamp-2">
                          {note.title}
                        </h3>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="text-red-500 hover:text-red-700 font-bold text-xl leading-none"
                        >
                          ×
                        </button>
                      </div>
                      <p className="text-sm sm:text-base opacity-85 mb-3 line-clamp-3">
                        {note.content}
                      </p>
                      <div className="flex justify-between items-center text-xs sm:text-sm opacity-70">
                        <span className="capitalize">📁 {note.category}</span>
                        <span className="text-right">🕒 {note.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* How it Works */}
            <div
              className={`
                p-5 sm:p-6 md:p-7 rounded-xl shadow-lg border
                ${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'}
              `}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-5">
                🔧 How localStorage Works
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div
                  className={`
                    p-4 md:p-5 rounded-lg text-sm
                    ${darkMode ? 'bg-gray-800/60' : 'bg-blue-50/80'}
                  `}
                >
                  <h4 className="font-semibold mb-2.5">✅ What it does:</h4>
                  <ul className="space-y-1.5 opacity-90">
                    <li>• Stores data in the browser</li>
                    <li>• Persists between sessions</li>
                    <li>• No server needed</li>
                    <li>• Very fast access</li>
                  </ul>
                </div>

                <div
                  className={`
                    p-4 md:p-5 rounded-lg text-sm
                    ${darkMode ? 'bg-gray-800/60' : 'bg-orange-50/80'}
                  `}
                >
                  <h4 className="font-semibold mb-2.5">⚠️ Limitations:</h4>
                  <ul className="space-y-1.5 opacity-90">
                    <li>• ~5–10 MB storage limit</li>
                    <li>• Only strings (JSON.stringify)</li>
                    <li>• Not secure for sensitive data</li>
                    <li>• Data stays in one browser</li>
                  </ul>
                </div>
              </div>

              <div
                className={`
                  mt-5 md:mt-6 p-4 md:p-5 rounded-lg text-sm
                  ${darkMode ? 'bg-gray-800/60' : 'bg-green-50/80'}
                `}
              >
                <h4 className="font-semibold mb-3">💡 Common Uses:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'User preferences',
                    'Shopping cart',
                    'Theme settings',
                    'Form drafts',
                    'Small cache',
                  ].map((item) => (
                    <span
                      key={item}
                      className={`
                        px-3 py-1 rounded-full text-xs sm:text-sm font-medium
                        ${darkMode ? 'bg-gray-700' : 'bg-white shadow-sm'}
                      `}
                    >
                      {item}
                    </span>
                  ))}
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