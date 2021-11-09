import React,{useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
import Block from './components/Block';

function App() {
  const [timerLeft, setTimerLeft] = useState(true);
  return (
    <>
    <Form/>
    </>
  );
}

export default App;
