import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDGQ1gZJAlTvIwccvdjuvJkom_NlTBNRgs",
    authDomain: "test-valik1710.firebaseapp.com",
    databaseURL: "https://test-valik1710.firebaseio.com",
    projectId: "test-valik1710",
    storageBucket: "test-valik1710.appspot.com",
    messagingSenderId: "230083531093",
    appId: "1:230083531093:web:e92178bd8fa48260c39fdc"
    
     
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
