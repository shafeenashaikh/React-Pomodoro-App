import React,{ useEffect, useRef} from 'react'
import Block from './Block';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;

`
const Text = styled.h1`
    font-size: 40px;
`
const Button = styled.button`
    display:flex;
    justify-content: center;

`


const Timer = ({timeLeft, setTimeLeft, isPaused, setIsPaused}) => {
    let minutes = Math.floor(timeLeft/60);
    let seconds = Math.floor(timeLeft-60*minutes);

    let intervalRef = useRef();

    // useEffect(() => {
        
    //     const id = setInterval(()=>{
    //         setTimeLeft(timeLeft-1)
    //     }, 1000)
    //     intervalRef.current=id;
    //     return () => clearInterval(intervalRef.current);

    // });
  
    return (
        <>
            <Container>
            <Block param="Minutes" number={minutes}/><Text>:</Text><Block param="seconds" number={seconds}/>
            </Container>
            <div align='center'><Button>RESET</Button></div>
        </>
    )
}

export default Timer
