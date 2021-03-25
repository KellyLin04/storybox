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
   var usersRef = db.collection('users');
   var query = usersRef.whereEqualTo(user_id);
   if (query.value != null) {
      usersRef.add({id: user_id, name: name})
   }
}
export default addUser;

//check if user exist


//add new items to a box

//delete items from a box
