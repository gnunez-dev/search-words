import { doc, getDoc, getDocs, collection, writeBatch, query, updateDoc } from 'firebase/firestore'
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
//@ts-ignore
export const getOrSaveWord = async (word, setData, getData) => {
  const wordLowerCase = word.toLowerCase()

  const wordRef = doc(db, "words", wordLowerCase);
  const wordSnap = await getDoc(wordRef);

  

  if (wordSnap.exists()) {
    setData(wordSnap.data())

  } else {

    const apiCallRef = doc(db, "api_call", "words");
    const apiCallSnap = await getDoc(apiCallRef);

    const dataApiCall = apiCallSnap.data()
    const countApiCall = dataApiCall?.count
    //console.log({countApiCall})

    if (countApiCall < 1800) {
      const data = await getData()
      
      if(!data?.success){
        setData('')
        
      } else {
        const newCount = countApiCall + 1;
        await updateDoc(apiCallRef, { count: newCount });

        const collectionRef = collection(db, 'words');
        const batch = writeBatch(db);
        
        const docRef = doc(collectionRef, wordLowerCase);
        batch.set(docRef, data);
        await batch.commit();

        setData(data)
      }
      
    } else {
      console.log('No - Api call')
    }
    //console.log("No such document!", data);
  }
}