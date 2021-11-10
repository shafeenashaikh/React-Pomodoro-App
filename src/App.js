import React,{useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
// import Block from './components/Block';
import styled from 'styled-components';

const Title = styled.div`
    font-size: 50px;
    text-align: center;
    padding: 50px 0px;

    background: pink;
`

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPoused] = useState(true);
  return (
    <>
    <Title>POMODORO APP</Title>
    <Form setTimeLeft={setTimeLeft}/>
    {
      timeLeft<0?
      <Finished setTimeLeft={setTimeLeft} setIsPoused={setIsPoused}/>:
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} 
              isPaused={isPaused} setIsPoused={setIsPoused}/>
      
    }
    </>
  );
}

export default App;
