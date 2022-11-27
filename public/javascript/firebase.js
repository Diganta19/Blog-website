let firebaseConfig = {
    apiKey: "AIzaSyAOZzY1k4Jg1Y6cVHT4c3nggGfKdnkWkGU",
    authDomain: "blogging-website-fda33.firebaseapp.com",
    projectId: "blogging-website-fda33",
    storageBucket: "blogging-website-fda33.appspot.com",
    messagingSenderId: "941165185977",
    appId: "1:941165185977:web:caacaeab7494e4a8514468"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();