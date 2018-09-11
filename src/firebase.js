import firebase from 'firebase';

//Initialize Firebase
const config = {
    apiKey: "AIzaSyAsa2tYLuF7YjHTlO6_UofseaM9VG6K9sA",
    authDomain: "banshee-dev.firebaseapp.com",
    databaseURL: "https://banshee-dev.firebaseio.com",
    projectId: "banshee-dev",
    storageBucket: "",
    messagingSenderId: "1004620458099"
}

firebase.initializeApp(config);

export default firebase;