import React from "react";

const NoteCard = ({ note, onEdit, onDelete, onPin }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md hover:scale-105 mx-2">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm italic">{note.tagline}</p>
      <p className="text-gray-700">{note.body}</p>
      <div className="flex justify-between mt-4">
        <button
          className="text-blue-500"
          onClick={() => onPin(note.id)}
        >
          {note.pinned ? "Unpin" : "Pin"}
        </button>
        <button
          className="px-5 py-2 bg-green-500 text-white rounded-md"
          onClick={() => onEdit(note.id)}
        >
          Edit
        </button>
        <button
          className=" bg-red-500 text-white px-5 py-2 rounded-md"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
