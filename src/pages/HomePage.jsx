import React, { useState } from "react";
import NoteCard from "../Components/NoteCard";
import NoteModal from "../Components/NoteModel";
import { toast } from "react-toastify";
import Pagination from "../Components/Pagination";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const notesPerPage = 6;

  const handleSave = (newNote) => {
    if (noteToEdit) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === noteToEdit.id ? { ...newNote, id: note.id } : note
        )
      );
      toast.success("Note updated!");
    } else {
      setNotes((prev) => [
        ...prev,
        { ...newNote, id: Date.now(), pinned: false },
      ]);
      toast.success("Note added!");
    }
    setModalOpen(false);
    setNoteToEdit(null);
  };

  const handleEdit = (id) => {
    setNoteToEdit(notes.find((note) => note.id === id));
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    toast.success("Note deleted!");
  };

  const handlePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
    toast.info("Note pin status changed!");
  };

  const pinnedNotes = notes.filter((note) => note.pinned);
  const unpinnedNotes = notes.filter((note) => !note.pinned);

  // Pagination logic
  const paginatedNotes = [...pinnedNotes, ...unpinnedNotes].slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  const totalPages = Math.ceil([...pinnedNotes, ...unpinnedNotes].length / notesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Notekeeper</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded mt-5"
        onClick={() => setModalOpen(true)}
      >
        Add Note
      </button>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {paginatedNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPin={handlePin}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <NoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        noteToEdit={noteToEdit}
      />
    </div>
  );
};

export default HomePage;

