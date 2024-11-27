import React, { useState, useEffect } from "react";

const NoteModal = ({ isOpen, onClose, onSave, noteToEdit }) => {
  const [note, setNote] = useState({
    title: "",
    tagline: "",
    body: "",
    pinned: false,
  });

  useEffect(() => {
    if (noteToEdit) setNote(noteToEdit);
  }, [noteToEdit]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {noteToEdit ? "Edit Note" : "Add Note"}
        </h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full mb-2 p-2 border border-gray-300 rounded"
          value={note.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tagline"
          placeholder="Tagline"
          className="w-full mb-2 p-2 border border-gray-300 rounded"
          value={note.tagline}
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Body"
          className="w-full mb-2 p-2 border border-gray-300 rounded"
          rows="4"
          value={note.body}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => onSave(note)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
