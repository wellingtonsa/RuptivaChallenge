import firebase from 'react-native-firebase';

let db;

export function init(){
    db = firebase.firestore().collection('users');
}

export function add(doc){
    db.add(doc);
}

export function get(){
    let users = [];
    db.onSnapshot(querySnapshot => {
        querySnapshot.forEach((doc) => {

          const { _data } = doc;

          users.push({
            ..._data
          });
        });
    });

    return users;
}