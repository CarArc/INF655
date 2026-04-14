import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';

export function useUserTasks(userId) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId || !db) {
      return undefined;
    }

    // Show loading until the first snapshot arrives from Firestore.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync UI with async listener start
    setLoading(true);
    const q = query(collection(db, 'tasks'), where('userId', '==', userId));

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: data.taskName ?? '',
            description: data.taskDescription ?? '',
            createdAt: data.createdAt,
          };
        });
        list.sort((a, b) => {
          const ta = a.createdAt?.toMillis?.() ?? 0;
          const tb = b.createdAt?.toMillis?.() ?? 0;
          return tb - ta;
        });
        setTasks(list);
        setError(null);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => {
      unsub();
      setTasks([]);
      setError(null);
      setLoading(false);
    };
  }, [userId]);

  async function addTask(taskName, taskDescription) {
    if (!db) return;
    await addDoc(collection(db, 'tasks'), {
      userId,
      taskName,
      taskDescription,
      createdAt: serverTimestamp(),
    });
  }

  async function deleteTask(taskId) {
    if (!db) return;
    await deleteDoc(doc(db, 'tasks', taskId));
  }

  return { tasks, loading, error, addTask, deleteTask };
}
