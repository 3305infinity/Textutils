import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Dark from './components/Dark';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light')
  const togglemode=()=>{
        if(mode=='light'){
            setmode('dark')
            document.body.style.backgroundColor='#071727'
            showalert("dark mode has been anabled","success")
            document.title="textutils-Light Mode"
          }
        else{
          setmode('light')
            document.body.style.backgroundColor='white'
            showalert("light mode has been anabled","success")
            document.title="textutils-Light Mode"
        }
  }
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
        setalert({
            msg:message,
            type:type
          })
        setTimeout(()=>{
          setalert(null)
        },3000)
  }
  return( 
  <>
  <Router>
  <div>
  <Navbar title="TextUtils" aboutText="about" mode={mode} togglemode={togglemode}></Navbar>
  <Alert  alert={alert}/>
<Routes>
  <Route exact path="/about" element={<Dark mode={mode} showalert={showalert} />} />
  <Route exact path="/" element={<TextForm mode={mode} showalert={showalert} />} />
</Routes>
      </div>
    </Router>
  </>
  );
}
export default App;
