
import './App.css';
import Navbar  from './componant/Navbar';
import TextArea from './componant/TextArea';
import React, { useState } from 'react'


function App() {
  const [mod,setMod]=useState('light');
  const changeMod=()=>
  {
    if(mod==='light')
    {
      setMod('dark');
      document.body.style.backgroundColor= '#042743';
    }
    else
    {
      setMod('light');
      document.body.style.backgroundColor=' white';
    }
  }
  return (
    <>
    <div className="App">

     <Navbar title="Lower Case to Uppar Case" mod={mod} changeMod={changeMod}/>
    <TextArea title="Enter your text" mod={mod} />
    </div>
    
    </>
  );
}

export default App;
