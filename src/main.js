import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3QM0mDy0rTTDvw6TIC50tAPDMLY2f9yU",
    authDomain: "festivalrampagesae.firebaseapp.com",
    projectId: "festivalrampagesae",
    storageBucket: "festivalrampagesae.appspot.com",
    messagingSenderId: "80970167034",
    appId: "1:80970167034:web:70fa15102cd53863954f43"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);



const app = createApp(App)

app.use(router)

app.mount('#app')
