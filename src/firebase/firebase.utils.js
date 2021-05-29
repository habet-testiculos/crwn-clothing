import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDCxZYtYaTm-9gH7-0fgFLOaRTMapyty5I",
    authDomain: "crwn-db-999da.firebaseapp.com",
    projectId: "crwn-db-999da",
    storageBucket: "crwn-db-999da.appspot.com",
    messagingSenderId: "1025470962069",
    appId: "1:1025470962069:web:b8e6dd2c6cc53e59d93e9c",
    measurementId: "G-TGQC52NFL0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
