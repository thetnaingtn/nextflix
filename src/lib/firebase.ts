import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB1ToAvkePn77ZwvYedpAR1OkrLEgedsdc',
  authDomain: 'netflix-clone-70c23.firebaseapp.com',
  projectId: 'netflix-clone-70c23',
  storageBucket: 'netflix-clone-70c23.appspot.com',
  messagingSenderId: '73284308393',
  appId: '1:73284308393:web:9584df4bab59e89bd548b8',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
