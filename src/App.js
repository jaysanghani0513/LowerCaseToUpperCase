
import './App.css';
import Navbar from './componant/Navbar';
import TextArea from './componant/TextArea';
import React, { useState } from 'react'
import Alert from './componant/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [alert,setAlert]=useState(null);
  setTimeout(() => {
    setAlert(null);
    
  }, 1800);
  const [mod, setMod] = useState('light');
  const changeMod = () => {
    if (mod === 'light') {
      setMod('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mood has been enabled","succes");
    }
    else {
      setMod('light');
      document.body.style.backgroundColor = ' white';
      showAlert("Light mood has been enabled","succes")
    }
  }
  const showAlert=(messege,type)=>
  {
    setAlert(
    {
      messege : messege,
      type: type
    })
  }
  return (
    <>
      <div className={`App text-${mod === 'light' ? 'dark' : 'white'}`}>
          <Navbar title="Word Analyser" mod={mod} changeMod={changeMod} />
          <Alert alert={alert}/>
          <TextArea title="Enter your text" mod={mod} showAlert={showAlert} />
      </div>
{/* example 
 */}
 <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
