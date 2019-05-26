import React, { useState, useEffect } from 'react';
import firebase from 'react-native-firebase';
import { Container, Item, Name, Document, Type, Data } from './styles';
import {
    FlatList,
    RefreshControl
  } from 'react-native';

  export default function List() {
    
    const  db = firebase.firestore().collection('users');

    const [_refreshing, setRefresh] = useState(false);
    const [users, setUsers] = useState([])

      useEffect(() => {
        loadUsers();
      }, []);

      function loadUsers(){

        db.onSnapshot(querySnapshot => {
          let newUser = [];
          querySnapshot.forEach((doc) => {

            const { _data } = doc;

            newUser.push({
              ..._data
            });

          });
          setUsers(newUser);
        })
      }

      async function _onRefresh(){
          setRefresh(true);
          await loadUsers();
          setRefresh(false);
      }


    function renderUsers({ item }){  
        console.log(users);
        return (
          <Item>
            <Data>
              <Name>{item.name}</Name>
              <Document>{item.document}</Document>
            </Data>
            <Type type={item.type}/>
          </Item>
        )
    };

    return(
      <Container>
        
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={_refreshing}
              onRefresh={_onRefresh}
          />
          }
          data={users}
          keyExtractor={user => user.document}
          renderItem={renderUsers}
        /> 
      </Container>
      )
  }