import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAAaSmhwJVAN9lyjNh94xJ8V65YDi6m5zQ",
    authDomain: "crwn-db-896da.firebaseapp.com",
    projectId: "crwn-db-896da",
    storageBucket: "crwn-db-896da.appspot.com",
    messagingSenderId: "827134617354",
    appId: "1:827134617354:web:ebe70e00adcd5458f47cf3",
    measurementId: "G-8WHHJG18XF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(err) {

        }
    }

    return userRef;
}

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;