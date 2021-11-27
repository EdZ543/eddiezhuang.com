import 'firebase/firestore'
import firebase from 'firebase/app'

// More about firebase config on https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}
        
export const firestore = firebase.firestore()
export default firebase