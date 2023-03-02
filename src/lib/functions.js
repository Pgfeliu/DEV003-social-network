import {
  GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { doc, collection } from 'firebase/firestore';
import { auth, fs } from '../firebaseconf';

const provider = new GoogleAuthProvider();

export const googleLogIn = () => signInWithPopup(auth, provider);
// eslint-disable-next-line max-len
export const createAccount = (mail, password) => createUserWithEmailAndPassword(auth, mail, password);

export const logAcc = (mail, password) => signInWithEmailAndPassword(auth, mail, password);

export const exit = () => signOut(auth);

export const validateLog = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(collection(fs, 'Posts').id);
    } else {
      console.log('no esta logeado');
    }
  });
};
