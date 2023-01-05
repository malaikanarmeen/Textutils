import Alert from './components/Alert';
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbarr from './components/Navbarr';
import TextForm from './components/TextForm';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar } from 'react-bootstrap';
//import { FileImage,File } from './file1';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/


function App() {
     const [mode, setMode] = useState('light'); // Weather dark mode is enable or not
     const [alert, setAlert] = useState(null);

     const showAlert = (message, type)=>{
          setAlert({
            msg:message,
            type: type
         })
         setTimeout(() =>{
          setAlert(null);

         },3000);

         

     }

     const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success")
        //document.title='TextUtils - Dark Mode';
       // setInterval(() => {
         // document.title='TextUtils is Amazing';
          
        //}, 2000);
        //setInterval(() => {
        //  document.title='Install TextUtils Now';
          
       // }, 1500);
        
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success")
        //document.title='TextUtils - Light Mode';

      

      }
     }
  return (
    <>
    
    <Navbarr title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert  alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Try TextUtils - Character Counter, Remove Extra Spaces" mode={mode}/>
    {/*<About/>*/}
    </div>
    
    </>
  );  
}
export default App; 
  
  
  

  



