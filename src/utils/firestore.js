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

// add a new user
function addUser({user_id, name}) {
   var userRef = db.collection('users').doc(user_id);

   userRef.get().then((doc) => {
      if (doc.exists) {
         console.log("Document data:", doc.data());
      } else {
         console.log("No such document!");
         // add the user
         db.collection("users").doc(user_id).set({
            id: user_id,
            name: name
         })
         .then(() => {
            console.log("Document successfully written!");
         })
         .catch((error) => {
            console.error("Error writing document: ", error);
         });
      }
   }).catch((error) => {
      console.log("Error getting document:", error);
   });
} export default addUser;

//check if user exist


//add new items to a box

//delete items from a box
