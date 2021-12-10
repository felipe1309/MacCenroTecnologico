/* eslint-disable no-unused-vars */
import { initializeApp, getApps } from 'firebase/app'
import { isSupported } from 'firebase/analytics'
import { FacebookAuthProvider, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBGG6hqKXOyC49eiS4MsY_mIV2uT3N6gso",
  authDomain: 'maccentrotecnologico-f7d13.firebaseapp.com',
  projectId: 'maccentrotecnologico-f7d13',
  storageBucket: 'maccentrotecnologico-f7d13.appspot.com',
  messagingSenderId: '429934637462',
  appId: '1:429934637462:web:5b393e498fc45020e0adb7',
  measurementId: 'G-T3PQ90NE96'
}

const app = !getApps.length && initializeApp(firebaseConfig)//encaso de que firebase no tenga una instancia de app, la crea
const analytics = isSupported(app)
export const LoginWhiteFacebook = () => {// loguea con facebook 
  const provider = new FacebookAuthProvider()
  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      const credential = FacebookAuthProvider.credentialFromResult(result)
      const accessToken = credential.accessToken
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = FacebookAuthProvider.credentialFromError(error)
    })
}
export const LoginWhiteGoogle = () => {// loguea con google
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  return signInWithPopup(auth, provider).then((result) => {
    const user = result.user
    const { displayName, email, photoURL } = user
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const accessToken = credential.accessToken
    return {
      name:displayName,
      email,
      photoURL
    }

  })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
}
