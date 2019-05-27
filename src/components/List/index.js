import React, { useState, useEffect } from 'react';
import { init, get } from '../../services/firebase';
import { Container, Item, Name, Document, Type, Data } from './styles';
import {
    FlatList,
    RefreshControl
  } from 'react-native';

  export default function List(props) {
    
    const  db = firebase.firestore().collection('users');

    const [_refreshing, setRefresh] = useState(false);
    const [users, setUsers] = useState([])

      useEffect(() => {
        init();
        loadUsers();
      }, [props.opacity]);
      

      function loadUsers(){
          setUsers(get());
      }

      async function _onRefresh(){
          setRefresh(true);
          await loadUsers();
          setRefresh(false);
      }


    function renderUsers({ item }){  
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
      <Container opacity={props.opacity}>
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