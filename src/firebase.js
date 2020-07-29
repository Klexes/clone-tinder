import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCFAkYgTxL6Ww5ZF8b_LyAUNxwUZQ1dvUk",
    authDomain: "tinder-clone-8544d.firebaseapp.com",
    databaseURL: "https://tinder-clone-8544d.firebaseio.com",
    projectId: "tinder-clone-8544d",
    storageBucket: "tinder-clone-8544d.appspot.com",
    messagingSenderId: "857781461145",
    appId: "1:857781461145:web:df7945d5bc566f71a35808",
    measurementId: "G-ZCHK7WFV1W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database