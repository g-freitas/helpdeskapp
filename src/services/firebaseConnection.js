
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAsb89aef3euEL7jA9qS0Yhwt5M8XNEs7Q",
    authDomain: "tickets-9922d.firebaseapp.com",
    projectId: "tickets-9922d",
    storageBucket: "tickets-9922d.appspot.com",
    messagingSenderId: "123792870293",
    appId: "1:123792870293:web:7dc0cf8d204e204e00849c",
    measurementId: "G-JQKXX1WS9B"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage };