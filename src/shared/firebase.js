import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEIXGQ3z3ujThTB5YcFKIb1zkZfq4aoqY",
  authDomain: "pinterest-6c0db.firebaseapp.com",
  projectId: "pinterest-6c0db",
  storageBucket: "pinterest-6c0db.appspot.com",
  messagingSenderId: "170365550889",
  appId: "1:170365550889:web:bc96047a16f811ca3d3738",
  measurementId: "G-42HF1C6PXT",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export default app;
