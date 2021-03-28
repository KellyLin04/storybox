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

/**
 * Gets a user
 * 
 * @param user_id
 * @param name  
 * @return doc.data()
 */
function getUser({user_id}) {
   var userRef = db.collection('users').doc(user_id);

   userRef.get().then((doc) => {
      if (doc.exists) {
         console.log("Document data:", doc.data());
         return doc
      } else {
         console.log("No such document!");
      }
   }).catch((error) => {
      console.log("Error getting document:", error);
   });
}
export {
   getUser,
}

/** 
 * Gets a user's box(s)
 * 
 * @param user_id
 * @param name  
 * @return doc.data()
 */
function getBox({user_id}) {
  var userRef = db.collection('boxes').doc(user_id);

  userRef.get().then((doc) => {
     if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc
     } else {
        console.log("No such document!");
     }
  }).catch((error) => {
     console.log("Error getting document:", error);
  });
}
export {
   getBox,
}

/**
 * Adds a user if that user does not exist in the database
 * 
 * @param user_id
 * @param name  
 */
function addUser({profileObj}) {
   var userRef = db.collection('users').doc(profileObj.googleId);

   userRef.get().then((doc) => {
      if (doc.exists) {
         console.log("Document data:", doc.data());
      } else {
         console.log("No such document!");
         // add the user
         db.collection("users").doc(profileObj.googleId).set({
            id: profileObj.googleId,
            name: profileObj.name,
            email: profileObj.email,
            imageUrl: profileObj.imageUrl,
            liked: [],
            matches: []
         })
         .then(() => {
            console.log("Document successfully written!");
         })
         .catch((error) => {
            console.error("Error writing document: ", error);
         });
         // add an empty box
         var arr = []
         addNewBox({user_id: profileObj.googleId, contents: arr});
      }
   }).catch((error) => {
      console.log("Error getting document:", error);
   });
} export default addUser;

/**
 * Creates a new box for the user 
 * 
 * @param user_id 
 * @param contents an array of strings represeting the box contents
 */
 function addNewBox({user_id, contents}) {
   var userRef = db.collection('boxes').doc(user_id);

   userRef.get().then((doc) => {
      if (doc.exists) {
         console.log("Document data:", doc.data());
      } else {
         console.log("No such document!");
         // add the user
         db.collection("boxes").doc(user_id).set({
            id: user_id,
            status: "empty",
            contents: contents
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
}
export {
   addNewBox,
}

/**
 * Updates the liked field of user doc  
 * 
 * @param user_id 
 * @param liked_id an array of strings represeting the box contents
 */

function saveLikedBox(user_id, liked_id){
   console.log("save to database");
   var userRef = getUser(user_id);
   var userData = userRef.data();
   var arrayLiked = userData.liked;
   arrayLiked.push(liked_id);
   const res = userRef.update({liked: arrayLiked});
}
export {
   saveLikedBox,
}

//add items to box

//delete items from a box

//save box id to user's "liked" boxes

//save matches