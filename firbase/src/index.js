import { initializeApp } from 'firebase/app'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebase = initializeApp({
    apiKey: "AIzaSyA6v2DCpxpPmTYgfU2XM6W3B2apuT9mr3Q",
    authDomain: "fire-first-b7d63.firebaseapp.com",
    projectId: "fire-first-b7d63",
    storageBucket: "fire-first-b7d63.appspot.com",
    messagingSenderId: "553484874846",
    appId: "1:553484874846:web:74f5746070d1c7d31a70cf",
    measurementId: "G-VGK670SB8T"

}) 

const auth=getAuth(firebaseApp)
const db=getFirestore(firebaseApp)

onAuthStateChanged(auth,user=>{
    if(user!=null){
        console.log('logged in!')
    }else{
        console.log('No user')
    }
})