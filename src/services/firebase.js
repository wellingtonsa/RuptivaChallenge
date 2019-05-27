import firebase from 'react-native-firebase';

let db;
let users = [];

export function init(){
    db = firebase.firestore().collection('users');

      
   return db.onSnapshot(querySnapshot => {
    users = [];
    querySnapshot.forEach((doc) => {
      
      users.push({
        ...doc.data(),
        id: doc.id
      });
    });
    });
}


export function add(doc){
    db.add(doc);
}

export function get(){
  console.log(users);
  return users;
}

export function _delete(item){
   db.doc(item.id).delete();
}