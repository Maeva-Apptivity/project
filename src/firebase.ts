import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBpnUkNNQlTMIJD6FwZ-R1iLLlUPwV44DA",
//   authDomain: "chat-960d7.firebaseapp.com",
//   projectId: "chat-960d7",
//   storageBucket: "chat-960d7.firebasestorage.app",
//   messagingSenderId: "842540915556",
//   appId: "1:842540915556:web:2010598b2ea09033f27871"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDkWyp2rSpm3KZ4pWZcNaoqW5WcWRiZXzc",
  authDomain: "visiondesigne-ed6cd.firebaseapp.com",
  projectId: "visiondesigne-ed6cd",
  storageBucket: "visiondesigne-ed6cd.firebasestorage.app",
  messagingSenderId: "303685066864",
  appId: "1:303685066864:web:2eb69cf06b9c9615e494b5",
  measurementId: "G-N0ZVKSBCT9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);