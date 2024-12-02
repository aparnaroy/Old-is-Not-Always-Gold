// Check if Firebase app is already initialized
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDR5Irb0Jb3-vHuVVNUIkgE5R57MZvZ2vw",
        authDomain: "old-is-not-always-gold.firebaseapp.com",
        databaseURL: "https://old-is-not-always-gold-default-rtdb.firebaseio.com",
        projectId: "old-is-not-always-gold",
        storageBucket: "old-is-not-always-gold.firebasestorage.app",
        messagingSenderId: "1000004859732",
        appId: "1:1000004859732:web:cd8406362cc450caa5fac1",
        measurementId: "G-1H6YR75LVC"
    };

    // Initialize Firebase only if it's not already initialized
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();
