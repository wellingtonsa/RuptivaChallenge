import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 15px;
    padding: 2px;
    border-radius: 5px;
    border: 1px solid #DDD;
    background: #FFF
`;

export const Item = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color:  #CCC;
    justify-content: space-between;
`;

export const Data = styled.View`
    display: flex;
    flex-direction: column;

`;

export const Name = styled.Text`
    font-size: 18px;
`;

export const Document = styled.Text`
    font-size: 12px;
    color: #CCC;
`;

export const Type = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 60px;
    background: ${props => { return ((props.type === 'individual') ? "#2196f3" :"#ff8b23")}};
`;
