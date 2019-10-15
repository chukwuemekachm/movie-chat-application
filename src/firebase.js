import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const {
  REACT_APP_API_KEY,
  REACT_APP_DOMAIN_NAME,
  REACT_APP_PROJECT_ID,
} = process.env;

firebase.initializeApp({
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_DOMAIN_NAME,
  projectId: REACT_APP_PROJECT_ID,
});

const db = firebase.firestore();

const commentsRef = db.collection('comments');

export function fetchMovieComments(movie, updateChat) {
  try {
    commentsRef.where('movie', '==', movie).orderBy('createdAt').onSnapshot(function ({ docs }) {
      const chats = docs.map(doc => doc.data());
      updateChat(movie, chats);
    });
  } catch (error) {
    return null;
  }
}

export function addMovieComment(movie, comment) {
  try {
    commentsRef.add({
      movie,
      body: comment,
      createdAt: Date.now().toString(),
    });
  } catch (error) {
    return null;
  }
}
