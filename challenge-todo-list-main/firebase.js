var firebaseConfig = {
    // apiKey: "AIzaSyAI1brKkR9XfOGErHdMQKyfj8GQbKR7tXA",
    // authDomain: "to-do-list-519ae.firebaseapp.com",
    // projectId: "to-do-list-519ae",
    // storageBucket: "to-do-list-519ae.appspot.com",
    // messagingSenderId: "897143349984",
    // appId: "1:897143349984:web:e23f665d2848abc8fa2685",
    // measurementId: "G-N6YDZCPM2S"

    apiKey: "AIzaSyBm1uoRFrrieXThj3u4VKw6wFCHvp3o-MY",
    authDomain: "to-do-live-aa6e1.firebaseapp.com",
    projectId: "to-do-live-aa6e1",
    storageBucket: "to-do-live-aa6e1.appspot.com",
    messagingSenderId: "20304609751",
    appId: "1:20304609751:web:8d44a8c920af2aa8140b92",
    measurementId: "G-PMJ8LCJVJ1"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();