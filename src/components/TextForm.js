import React, {useState} from 'react'

export default function TextForm(props) {
  // local states
  const [text, setText] =useState('')
   
  const handleUpClick =()=>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handleLoClick =()=>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleClearClick =()=>{
      
      let newText = '';
      setText(newText)
    }
    const handleOnChange = (event)=>{
      console.log("On change");
      setText(event.target.value);
    }
    const handleCopy =() => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
      
    return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>

       <h1>{props.heading}</h1>
       <div className="mb-3">
      {/*<label for="myBox" className="form-label"></label>*/}
       <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
   </div>
   <buttom className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</buttom>
   <buttom className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</buttom>
   <buttom className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</buttom>
   <buttom className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</buttom>
   <buttom className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</buttom>


   
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text || "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
