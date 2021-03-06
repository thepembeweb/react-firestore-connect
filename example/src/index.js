import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import { initializeFirebase } from 'react-firestore-connect'

import './index.css'
import App from './App'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBEpuBdyJ7ex7IbmxcrxTeG5wcAIlmQMoc',
  authDomain: 'connect-firestore.firebaseapp.com',
  databaseURL: 'https://connect-firestore.firebaseio.com',
  projectId: 'connect-firestore',
  storageBucket: 'connect-firestore.appspot.com',
  messagingSenderId: '484397672960',
}
firebase.initializeApp(config)

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

initializeFirebase(firebase)

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'))
