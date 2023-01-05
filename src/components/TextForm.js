import React, {useState} from 'react'

export default function TextForm(props) {
  // local states
  const [text, setText] =useState('')
   
  const handleUpClick =()=>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted lo Uppercase!", "success")
           
    }
    const handleLoClick =()=>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "success")

    }
    const handleClearClick =()=>{
      
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared!", "success")

    }
    const handleOnChange = (event)=>{
      console.log("On change");
      setText(event.target.value);
    }
    const handleCopy =() => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!", "success")

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")

    }
      
    return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>

       <h1 className='mb-4'>{props.heading}</h1>
       <div className="mb-3">
      {/*<label for="myBox" className="form-label"></label>*/}
       <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
   </div>
   <buttom disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</buttom>
   <buttom disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</buttom>
   <buttom disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</buttom>
   <buttom disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</buttom>
   <buttom disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</buttom>


   
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{ return element.length!==0 }).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text || "Nothing to Preview!"}</p>
    </div>
    </>
  )
}
