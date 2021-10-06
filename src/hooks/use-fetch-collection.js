import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useFetchCollection(target) {
   const { firebase } = useContext(FirebaseContext);
   const db = firebase.firestore();
   const [content, setContent] = useState([]);

   useEffect(() => {
      const fetchContent = async () => {
         try {
            const snapshot = await db.collection(target).get();
            const allContent = snapshot.docs.map((contentObj) => ({
               ...contentObj.data(),
               docId: contentObj.id,
            }));
            setContent(allContent);
         } catch (error) {
            console.log(error.message);
         }
      };
      fetchContent();
   }, [firebase, db, target]);

   return { [target]: content };
}
