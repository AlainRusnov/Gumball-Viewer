import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-3uvX_I-lcm-Shpb7clv8Vpt232BEhz8",
  authDomain: "ghost-dev-28501.firebaseapp.com",
  projectId: "ghost-dev-28501",
  storageBucket: "ghost-dev-28501.appspot.com",
  messagingSenderId: "182230624803",
  appId: "1:182230624803:web:c14e1c3e96299ae7141f96"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };