/* eslint-disable no-unused-vars */
 
import './App.css'
import Alert from './components/Alert'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, {useState} from 'react'


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    }),
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('Light mode has been enabled','success')
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "black  ";
      document.body.style.color = "white";
      showAlert('Dark mode has been enabled','success')

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </>
  )
}

export default App
