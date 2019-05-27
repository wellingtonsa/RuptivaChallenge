import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import { init, add } from '../../services/firebase';

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

    useEffect(() => init() , []);

    const validationSchema = yup.object().shape({
        name: yup
          .string()
          .required()
          .label('Nome'),
        document: yup
          .number()
          .required()
          .label('Identidade'),
      });

    async function _onSubmit(values, actions){

      await add({...values, type});
      actions.setSubmitting(false);
      props.showList();
    }

    return (
        <Container 
        style={{
          top: props.positionY
        }}
        >
        <Formik onSubmit={_onSubmit} validationSchema={validationSchema}>
          {formikProps => (
            <>
                <TypeContainer>
                    <TypeOption>
                        <RadioButton
                        value="individual"
                        status={type === 'individual' ? 'checked' : 'unchecked'}
                        onPress={() => setTypes('individual')}/>
                        <Text>Pessoa Física</Text>
                    </TypeOption>

                    <TypeOption >
                        <RadioButton
                        value="business"
                        status={type === 'business' ? 'checked' : 'unchecked'}
                        onPress={() => setTypes('business')}/>
                        <Text>Pessoa Jurídica</Text>
                    </TypeOption>
                </TypeContainer>
              <TextInput
                onChangeText={formikProps.handleChange('name')}
                placeholder={type === 'individual'
                    ? 'Nome (Pessoa Fisica)'
                    : 'Razão Social (Pessoa Jurídica)'
                }
                editable={!formikProps.isSubmitting}
              />
              <ErrorMessage> { formikProps.errors.name } </ErrorMessage>

              <TextInput
                keyboardType="numeric"
                onChangeText={formikProps.handleChange('document')}
                placeholder={type === 'individual' ? 'Identidade (CPF)' : 'Identidade (CNPJ)'}
                editable={!formikProps.isSubmitting}
              />
              <ErrorMessage> { formikProps.errors.document } </ErrorMessage>

              {formikProps.isSubmitting ? (
                <LoadingContainer>
                    <ActivityIndicator />
                    <Text>Enviando...</Text>
                </LoadingContainer>
              ) : (
                <Button title="Enviar" onPress={formikProps.handleSubmit} />
              )}
            </>
          )}
        </Formik>
      </Container>);

}
