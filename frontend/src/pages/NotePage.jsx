import React, { useState } from 'react';

const NotesPage = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'App Idea', content: 'A minimal note taking app using React and Tailwind...', date: '10:30 AM' },
    { id: 2, title: 'Shopping List', content: '1. Milk\n2. Bread\n3. Coffee Beans', date: 'Yesterday' },
  ]);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = () => {
    if (!title && !content) return;
    const newNote = { id: Date.now(), title, content, date: 'Just now' };
    setNotes([newNote, ...notes]);
    setTitle('');
    setContent('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="flex h-screen bg-[#F5F5F7] overflow-hidden font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 hidden md:flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">JD</div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Jane Doe</h3>
              <p className="text-xs text-gray-500">Free Plan</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            <a href="#" className="block px-4 py-2 text-sm font-medium bg-blue-50 text-blue-600 rounded-xl">All Notes</a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">Favorites</a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">Archives</a>
          </nav>
        </div>
        
        <button className="text-sm text-red-500 font-medium hover:text-red-600 text-left px-4">Log Out</button>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
            <p className="text-gray-500 mt-1 text-sm">{notes.length} notes found</p>
          </div>
        </header>

        {/* INPUT AREA */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-10 max-w-2xl mx-auto md:mx-0">
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title" 
            className="w-full text-lg font-semibold text-gray-900 placeholder-gray-400 outline-none mb-2"
          />
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a note..." 
            className="w-full h-20 resize-none text-gray-600 placeholder-gray-400 outline-none text-base"
          ></textarea>
          <div className="flex justify-end mt-2">
            <button 
              onClick={addNote}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-blue-500/30 shadow-md"
            >
              Save Note
            </button>
          </div>
        </div>

        {/* NOTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div key={note.id} className="group bg-white p-6 rounded-3xl border border-transparent hover:border-gray-200 hover:shadow-xl shadow-sm transition-all duration-300 relative">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{note.title || 'Untitled'}</h3>
                <button 
                  onClick={() => deleteNote(note.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 text-sm whitespace-pre-wrap leading-relaxed">{note.content}</p>
              <p className="text-xs text-gray-400 mt-4">{note.date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NotesPage;