import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";
// we need somehow to seed database

//we need to iniate config
const config = {
  apiKey: "AIzaSyDsw8Ryl1VY78p8KPmatdFu5oZqq3Lgey0",
  authDomain: "netflix-clone-472cf.firebaseapp.com",
  projectId: "netflix-clone-472cf",
  storageBucket: "netflix-clone-472cf.appspot.com",
  messagingSenderId: "866286208661",
  appId: "1:866286208661:web:eaa8597a3c91f026e2bd9c",
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);

export { firebase };
