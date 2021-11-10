import React,{useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
import styled from 'styled-components';

const Title = styled.div`
    font-size: 50px;
    text-align: center;
    padding: 50px 0px;
    background: pink;
    color: whitesmoke;
    text-shadow: 2px 2px grey;
    margin-bottom: 20px;
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
