import firebase from 'firebase'

//Initialize Firebase
const config = {
    apiKey: "AIzaSyCY4FLDvafkjzom9ohO-44AiNwfy5DH0c8",
    authDomain: "banshee-d8cc7.firebaseapp.com",
    databaseURL: "https://banshee-d8cc7.firebaseio.com",
    projectId: "banshee-d8cc7",
    storageBucket: "banshee-d8cc7.appspot.com",
    messagingSenderId: "1009469904379"
}

firebase.initializeApp(config);

export default firebase;