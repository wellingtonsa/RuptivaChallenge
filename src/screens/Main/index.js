import React, { Component, useState } from 'react';
import Form from '../../components/Form';
import List from '../../components/List';
import { Container } from './styles';



export default function Main() {

    const [ opacity,  setOpacity ] = useState(0);
    const [ positionY, setPositionY ] = useState(0);

    function handleShowList(){
        setOpacity(1);
        setPositionY(-380);
    }

    return (
    <Container>
        <List opacity={opacity}/>
        <Form positionY={positionY} showList={handleShowList}/>
    </Container>
    );

}
