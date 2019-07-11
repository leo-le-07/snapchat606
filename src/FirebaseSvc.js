import firebase from 'firebase'
import 'firebase/firestore'

class FirebaseSvc {
  database

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCzptQe1a-P-j0r749Af9Rg_4UYUpKjg2w",
        authDomain: "snapchat606-f3bcc.firebaseapp.com",
        databaseURL: "https://snapchat606-f3bcc.firebaseio.com",
        projectId: "snapchat606-f3bcc",
        storageBucket: "snapchat606-f3bcc.appspot.com",
        messagingSenderId: "314554280575",
        appId: "1:314554280575:web:f4f3c71498687521",
      })

      this.database = firebase.firestore()
    }
  }

  login = (user, successCallback, failedCallback) => {
    firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(successCallback, failedCallback)
  }

  sendMessage = (message) => {
    try {
      const currentUser = firebase.auth().currentUser
      this.database.collection('messages').add({
        ...message,
      })
    } catch(error) {
      console.log('cannot send message', error);
      alert("Cannot send message")
    }
  }

  getQuery = () => {
    return this.database
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .limit(50)
  }

  getUser = () => {
    const currentUser = firebase.auth().currentUser
    return {
      _id: currentUser.uid,
      email: currentUser.email,
    }
  }
}

const firebaseSvc = new FirebaseSvc()
export default firebaseSvc
