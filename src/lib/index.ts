import { doc, getDocs, collection, writeBatch, query } from 'firebase/firestore'
import { db } from './firebase'

export const addCollectionAndDocuments = async (collectionKey: string, objToAdd: any) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objToAdd.forEach((item: any) => {
    const docRef = doc(collectionRef, item.word.toLowerCase());
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log('done')
}

export const getWordsAndDocuments = async () => {
  const collectionRef = collection(db, 'words');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q)
  //@ts-ignore
  const wordMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {word} = docSnapshot.data();
    //@ts-ignore
    acc[word.toLowerCase()] = docSnapshot.data();
    return acc;
  }, {})
  return wordMap;
}
