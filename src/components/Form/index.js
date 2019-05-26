import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import firebase from 'react-native-firebase';

import {
    Text,
    Button,
    TextInput,
    ActivityIndicator,
  } from 'react-native';

import { 
  Container, 
  TypeOption, 
  ErrorMessage, 
  TypeContainer,
  LoadingContainer } from './styles';


export default function Main(props) {
    const [ type, setTypes ] = useState('individual');
    const  db = firebase.firestore().collection('users');


    const validationSchema = yup.object().shape({
        name: yup
          .string()
          .required()
          .label('Name'),
        document: yup
          .number()
          .required()
          .label('Document'),
      });

    async function _onSubmit(values, actions){

      await db.add({
        ...values, type
      });
      actions.setSubmitting(false);
      props.showList();
    }


    return (
        <Container positionY={props.positionY}>
        <Formik onSubmit={_onSubmit} validationSchema={validationSchema}>
          {formikProps => (
            <>
                <TypeContainer>
                    <TypeOption>
                        <RadioButton
                        value="individual"
                        status={type === 'individual' ? 'checked' : 'unchecked'}
                        onPress={() => setTypes('individual')}/>
                        <Text>Individual</Text>
                    </TypeOption>

                    <TypeOption >
                        <RadioButton
                        value="business"
                        status={type === 'business' ? 'checked' : 'unchecked'}
                        onPress={() => setTypes('business')}/>
                        <Text>Business</Text>
                    </TypeOption>
                </TypeContainer>
              <TextInput
                onChangeText={formikProps.handleChange('name')}
                placeholder={type === 'individual'
                    ? 'Name (Individual)'
                    : 'Name (Business)'
                }
                editable={!formikProps.isSubmitting}
              />
              <ErrorMessage> { formikProps.errors.name } </ErrorMessage>

              <TextInput
                keyboardType="numeric"
                onChangeText={formikProps.handleChange('document')}
                placeholder={type === 'individual' ? 'Document (CPF)' : 'Document (CNPJ)'}
                editable={!formikProps.isSubmitting}
              />
              <ErrorMessage> { formikProps.errors.document } </ErrorMessage>

              {formikProps.isSubmitting ? (
                <LoadingContainer>
                    <ActivityIndicator />
                    <Text>Enviando...</Text>
                </LoadingContainer>
              ) : (
                <Button title="Submit" onPress={formikProps.handleSubmit} />
              )}
            </>
          )}
        </Formik>
      </Container>);

}
