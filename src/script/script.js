import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBlGJBqMhkVAIU2ueDVThwt9PVfQ5Zk63E",
    authDomain: "firsttry-afd46.firebaseapp.com",
    projectId: "firsttry-afd46",
    storageBucket: "firsttry-afd46.appspot.com",
    messagingSenderId: "603989479888",
    appId: "1:603989479888:web:e0c3dd18fd2ab3841fe9d5",
    measurementId: "G-RCZL3ZQ8LS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const signIn = document.getElementById('signIn');
const signEmail = document.getElementById('signEmail');
const signPassword = document.getElementById('signPassword');

signIn.addEventListener("submit", (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword (auth, signEmail.value, signPassword.value)
    .then((userCredential) =>{
        const user = userCredential.user;
        console.log(user.accessToken);
        localStorage.setItem("accessToken", user.accessToken);
    })
.catch((error) =>{
    //catch errors
    const errorCode = error.code;
    const errorMessage = error.message;
});
});
