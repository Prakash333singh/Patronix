import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: "patronix-website.firebaseapp.com",
//   projectId: "patronix-website",
//   storageBucket: "patronix-website.appspot.com",
//   messagingSenderId: "1090031816248",
//   // appId: "1:1090031816248:web:60837a4b43dd047fefe0cd",
//   measurementId: "G-MYHLX6TF8C"
// };
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "myfirebaseproject-6b063.firebaseapp.com",
  projectId: "myfirebaseproject-6b063",
  storageBucket: "myfirebaseproject-6b063.appspot.com",
  messagingSenderId: "324771485259",
  // appId: "1:324771485259:web:b83ba2c5e518a06b231fce",
  measurementId: "G-7CG0Y3VHRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const getImageUrl = async (imagePath) => {
  const imageRef = ref(storage, imagePath);
  const imageUrl = await getDownloadURL(imageRef);
  console.log(imageUrl);
  return imageUrl;
};

export default getImageUrl;
