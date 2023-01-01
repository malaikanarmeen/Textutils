
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbarr from './components/Navbarr';
import TextForm from './components/TextForm';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar } from 'react-bootstrap';
//import { FileImage,File } from './file1';

function App() {
     const [mode, setMode] = useState('light'); // Weather dark mode is enable or not

     const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#154c79';
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';

      }
     }
  return (
    <>
<Navbarr title="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
<TextForm heading="Enter the text to analze below" mode={mode} />
{/*<About/>*/}
</div>
</>
  );
}

export default App;
