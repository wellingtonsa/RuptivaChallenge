import React, { Component, useState } from 'react';
import Form from '../../components/Form';
import List from '../../components/List';
import { Animated } from 'react-native'; 
import { Container } from './styles';



export default function Main() {

    const [ opacity,  setOpacity ] = useState(new Animated.Value(0));
    const [ positionY, setPositionY ] = useState(new Animated.Value(0));
    const [ showList, setShowList ] = useState(false);
    function handleShowList(){

        Animated.timing(opacity, {
            toValue: 1,
            duration: 500
        }).start();

        setShowList(true);


        Animated.timing(positionY, {
            toValue: -380,
            duration: 500
        }).start();
    }

    return (
    <Container>
        <List opacity={opacity} showList={showList}/>
        <Form positionY={positionY} showList={handleShowList}/>
    </Container>
    );

}
