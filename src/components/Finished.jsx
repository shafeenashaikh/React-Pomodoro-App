import React from 'react'
import Confetti from 'react-confetti'
import styled from 'styled-components'

const Text = styled.h1`
    margin: 20px 250px;
`

const Button = styled.button`
    font-size: 20px;
`;

const Finished = ({setTimeLeft, setIsPaused}) => {
    let width=window.innerWidth;


    return (
        <div align='center'>
            <Confetti width={width}/>
            <Text>Congratulations! You finished your Pomodoro. Go ahead and stretch your legs and take a break!</Text>

            <Button onClick={()=>{
                setTimeLeft(0);
                setIsPaused(true);
            }}>Reset</Button>
        </div>
    )
}

export default Finished