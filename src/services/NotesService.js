import { db } from './firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

export const fetchNotes = async () => {
  const notesCollection = collection(db, 'notes');
  const snapshot = await getDocs(notesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const saveNote = async (note) => {
  const noteRef = doc(db, 'notes', note.id);
  await updateDoc(noteRef, note);
};
