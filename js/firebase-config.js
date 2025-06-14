import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtE93hXeRfgwmsvDedxi7f9giLFSajYsA",
  authDomain: "veyno-9c9f9.firebaseapp.com",
  databaseURL: "https://veyno-9c9f9-default-rtdb.firebaseio.com",
  projectId: "veyno-9c9f9",
  storageBucket: "veyno-9c9f9.firebasestorage.app",
  messagingSenderId: "567089739517",
  appId: "1:567089739517:web:6c8e6de2286ce8d4dbb094"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
