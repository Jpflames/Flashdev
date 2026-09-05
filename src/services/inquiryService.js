import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

const COLLECTION_NAME = 'project_inquiries';

export const createInquiry = async (inquiryData) => {
  if (!db) throw new Error("Firebase not initialized");
  
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...inquiryData,
      status: 'new',
      createdAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding inquiry: ", error);
    throw error;
  }
};

export const getInquiries = async () => {
  if (!db) throw new Error("Firebase not initialized");
  
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
  } catch (error) {
    console.error("Error getting inquiries: ", error);
    throw error;
  }
};

export const updateInquiryStatus = async (id, status) => {
  if (!db) throw new Error("Firebase not initialized");
  
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, { status });
    return { success: true };
  } catch (error) {
    console.error("Error updating inquiry status: ", error);
    throw error;
  }
};

export const deleteInquiry = async (id) => {
  if (!db) throw new Error("Firebase not initialized");
  
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting inquiry: ", error);
    throw error;
  }
};
