import React, { useState, useEffect } from 'react';
import { init, get, _delete } from '../../services/firebase';
import { Container, Item, Name, Document, Type, Data } from './styles';
import {
    Alert,
    FlatList,
    RefreshControl
  } from 'react-native';

  export default function List(props) {

    const [_refreshing, setRefresh] = useState(false);
    const [users, setUsers] = useState([])
    let unsubscribe ;

    useEffect(() => {
      unsubscribe = init();
    }, []);

      useEffect(() => {
        unsubscribe = init();
        loadUsers();
      }, [props.showList]);
      
      async function confirmDeletion(item){
        Alert.alert(
          'Deletar usuário',
          `Deseja deletar o usuário ${item.name}`,
          [
            {
              text: 'Sim', onPress: () => deleteUser(item)
            },
            {
              text: 'Não',
              onPress: () => {},
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }

      async function loadUsers(){
          setUsers(await get());
      }

      async function deleteUser(item){
        await _delete(item);
        await loadUsers();
      }

      async function _onRefresh(){
          setRefresh(true);
          await loadUsers();
          setRefresh(false);
      }


    function renderUsers({ item }){  
        return (
          <Item>
            <Data onLongPress={() => confirmDeletion(item)}>
              <Name>{item.name}</Name>
              <Document>{item.document}</Document>
            </Data>
            <Type type={item.type}/>
          </Item>
        )
    };

    return(
      <Container style={
        { opacity: props.opacity }
      }>
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