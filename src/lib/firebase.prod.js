import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// configuration
const config = {
   apiKey: 'AIzaSyBtMMi_j6VmgEIrXlfrrD8jNAVyIAHbErI',
   authDomain: 'netflix-clone-1fbfa.firebaseapp.com',
   databaseURL: 'https://netflix-clone-1fbfa.firebaseio.com',
   projectId: 'netflix-clone-1fbfa',
   storageBucket: 'netflix-clone-1fbfa.appspot.com',
   messagingSenderId: '196298467548',
   appId: '1:196298467548:web:7ac9671df0733b7fb76c19',
   measurementId: 'G-G57C6FG39H',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
