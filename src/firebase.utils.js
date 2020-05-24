import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAFU9rFBKI6G_iT_Gv_65ZGe1YDkuxmI_w",
  authDomain: "weather-app-a7e3c.firebaseapp.com",
  databaseURL: "https://weather-app-a7e3c.firebaseio.com",
  projectId: "weather-app-a7e3c",
  storageBucket: "weather-app-a7e3c.appspot.com",
  messagingSenderId: "663473543312",
  appId: "1:663473543312:web:f50017e185230fd47e2015",
  measurementId: "G-NRJ2XS2JDF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const collectionRef = firestore.collection("users");

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  console.log(auth);
  console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDeRef = collectionRef.doc();
    batch.set(newDeRef, obj);
  });
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
