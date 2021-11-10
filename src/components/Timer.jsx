import React from 'react'
import Block from './Block';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;

`
const Text = styled.h1`
    font-size: 40px;
`

const Timer = ({timeLeft, setTimeLeft, isPaused, setIsPaused}) => {
    let minutes = Math.floor(timeLeft/60);
    let seconds = Math.floor(timeLeft-60*minutes);
 
    return (
        <Container>
           <Block param="Minutes" number={minutes}/><Text>:</Text><Block param="seconds" number={seconds}/>
        </Container>
    )
}

export default Timer
