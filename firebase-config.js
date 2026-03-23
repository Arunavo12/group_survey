import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0cmuRVryGYBoAN6wq_sx0XUtIt3mbTbI",
  authDomain: "groupsurvey-dea45.firebaseapp.com",
  projectId: "groupsurvey-dea45",
  storageBucket: "groupsurvey-dea45.firebasestorage.app",
  messagingSenderId: "482768417989",
  appId: "1:482768417989:web:417643c011d308b4172cac",
  measurementId: "G-EREQ2FZ1BH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
