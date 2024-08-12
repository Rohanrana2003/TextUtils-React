/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        text.length>0 && props.showAlert("Converted text to UpperCase", "success");
    }

    const handleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        text.length>0 && props.showAlert("Converted text to LowerCase", "success");
    }

    const handleRevCase = () =>{
        let newArr = text.split('');

        newArr = newArr.reverse()

        setText(newArr.join(''));
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        text.length>0 && props.showAlert("Removed Extra Spaces", "success");

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        text.length>0 && props.showAlert("Text Copied", "success");

    }

    const handleClear = () => {
        setText("");
        text.length>0 && props.showAlert("Cleared", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'} } value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoCase}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleRevCase}>Reverse Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>

            </div>
            <div className="container my-3">
                <h2>Your text summary </h2>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").filter((e)=>{return e.length!==0}).length)} minutes to read.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>

        </>
    )
}
