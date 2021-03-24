import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyB_sstUU-g2XkowV-_tNgZ1rxj_NA6mqAY",
   authDomain: "storybox-688dc.firebaseapp.com",
   databaseURL: "https://storybox-688dc-default-rtdb.firebaseio.com",
   projectId: "storybox-688dc",
   storageBucket: "storybox-688dc.appspot.com",
   messagingSenderId: "993997951786",
   appId: "1:993997951786:web:d1cb4e385dd79468e4c453",
   measurementId: "G-BVJDNHLJL3"
};
app.initializeApp(firebaseConfig);
const db = app.firestore();

function addUser({user_id, name}){
   db.collection('users').add({id: user_id, name: name})
   console.log(user_id)
   console.log(user_id)
}
export default addUser;

//function to check if user exist
