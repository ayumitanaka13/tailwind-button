import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import firebase from "firebase/app";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
