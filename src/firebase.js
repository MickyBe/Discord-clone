import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyACiLRImydDxqV1huSIqtd1jb2uGaiza3s",
  authDomain: "discord-clone-a5d44.firebaseapp.com",
  projectId: "discord-clone-a5d44",
  storageBucket: "discord-clone-a5d44.appspot.com",
  messagingSenderId: "569037701860",
  appId: "1:569037701860:web:586c636ad84570720b22f1",
  measurementId: "G-NVFMGG5WNS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;