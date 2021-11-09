import React,{useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
import Block from './components/Block';

function App() {
  const [timeLeft, setTimerLeft] = useState(true);
  return (
    <>
    <Form/>
    {
      timeLeft?
      <Timer/>:
      <Finished/>
    }
    </>
  );
}

export default App;
