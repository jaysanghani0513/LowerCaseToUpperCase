import React,{useState} from 'react'

export default function TextArea(props) {
    const Handelclick =()=>
    {
        console.log("In handle click function");
        
        setText(text.toUpperCase());
    }
    const Handleonchange=(event)=>
    {
        console.log("In handle on change  function");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter your text");
     
    
  return (
      <div class="container my-5">
           <div class="input-group">
  <span class="input-group-text">{props.title}</span>
  <textarea class="form-control" aria-label="With textarea" id="myText" value={text} onChange={Handleonchange} ></textarea>
</div>
<div class="col-auto my-5">
    <button type="submit" class="btn btn-primary mb-3" onClick={Handelclick}  >Conver To Upper Case </button>
  </div>
</div>

  )
}
