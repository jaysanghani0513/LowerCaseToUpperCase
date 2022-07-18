import React, { useState } from 'react'

export default function TextArea(props) {
  const Handeluperclick = () => {

    setText(text.toUpperCase());
    props.showAlert("converted Uppercase ","sucess");
  }
  const Handellowerclick = () => {

    setText(text.toLowerCase());
    props.showAlert(" converted Lowercase ","sucess");
  }
  const Handelcoppyclick = () => {

    var copyText = document.getElementById("myText");

    /* Select the text field */
    copyText.select();


    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Coppy succesfully","sucess");

  }
  const Handelclearclick = () => {

    setText('');
    props.showAlert("clear text","sucess");

  }

  const Handleonchange = (event) => {

    setText(event.target.value);
  }
  
  

  const [text, setText] = useState("");


  return (
    <div className="container my-5">
      <div className="input-group">
        <span className="input-group-text" style={{ backgroundColor: props.mod === 'light' ? 'white' : '#D3D3D3' , color:props.mod === 'black'}}> <h5>{props.title} </h5></span>
        <textarea className="form-control" aria-label="With textarea" id="myText" value={text} onChange={Handleonchange}
          style={{
            backgroundColor: props.mod === 'light' ? 'white' : 'grey',
            color:props.mod==='dark'? 'white' : 'black'
          }}></textarea>
      </div>
      <div className="col-auto">
        <button type="submit"  disabled={text.length===0} className="btn btn-primary mb-3 my-4 mx-3" onClick={Handeluperclick} >Convert To Upper Case</button>
        <button type="submit" disabled={text.length===0} className="btn btn-primary mb-3 my-4 mx-3" onClick={Handellowerclick} >Convert To Lower  Case</button>
        <button type="submit" disabled={text.length===0} className="btn btn-primary mb-3 my-4 mx-3" onClick={Handelcoppyclick} >Coppy text</button>
        <button type="submit" disabled={text.length===0} className="btn btn-primary mb-3 my-4 mx-3" onClick={Handelclearclick} >Clear</button>
      </div>
      <div className="container my-5">
         <h1> Word Analizer </h1>
         <h2>Number of Characters = {text.length}</h2>
         <h2>Number of Word = {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</h2>
      </div>

    </div>

  )
}
