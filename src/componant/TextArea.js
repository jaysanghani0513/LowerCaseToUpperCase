import React, { useState } from 'react'

export default function TextArea(props) {
  const Handeluperclick = () => {

    setText(text.toUpperCase());
  }
  const Handellowerclick = () => {

    setText(text.toLowerCase());
  }
  const Handelcoppyclick = () => {

    var copyText = document.getElementById("myText");

    /* Select the text field */
    copyText.select();


    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

  }
  const Handelclearclick = () => {

    setText('');
  }

  const Handleonchange = (event) => {

    setText(event.target.value);
  }

  const [text, setText] = useState("");


  return (
    <div className="container my-5">
      <div className="input-group">
        <span className="input-group-text" style={{ backgroundColor: props.mod === 'light' ? 'white' : '#D3D3D3' }}>{props.title}</span>
        <textarea className="form-control" aria-label="With textarea" id="myText" value={text} onChange={Handleonchange}
          style={{
            backgroundColor: props.mod === 'light' ? 'white' : 'grey'
          }}></textarea>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3 my-4 mx-3" onClick={Handeluperclick} >Convert To Upper Case</button>
        <button type="submit" className="btn btn-primary mb-3 my-4 mx-3" onClick={Handellowerclick} >Convert To Lower  Case</button>
        <button type="submit" className="btn btn-primary mb-3 my-4 mx-3" onClick={Handelcoppyclick} >Coppy text</button>
        <button type="submit" className="btn btn-primary mb-3 my-4 mx-3" onClick={Handelclearclick} >Clear</button>
      </div>
      <div className="container my-5">
         <h1> Word Analizer </h1>
      </div>

    </div>

  )
}
