import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
      margin-top: 40%;
      margin-left: 5%;
      margin-right: 5%;
      padding: 20px;
      border: 1px solid #DDD;
      border-radius: 5px;
      background: #FFF;
`;

export const TypeContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`;

export const TypeOption = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
 
 export const ErrorMessage = styled.Text`
    color: red
 `;

 export const LoadingContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
 `;