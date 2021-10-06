import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
   //Get the auth user from the local storage
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
   const { firebase } = useContext(FirebaseContext);

   useEffect(() => {
      //Set the auth user when state of firebase is changed
      const listener = firebase.auth().onAuthStateChanged((authUser) => {
         if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser);
         } else {
            localStorage.removeItem('authUser');
            setUser(null);
         }
      });

      return () => listener();
   }, [firebase, user]);

   return { user };
}
