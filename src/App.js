import React,{useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
// import Block from './components/Block';

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPoused] = useState(true);
  return (
    <>
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
