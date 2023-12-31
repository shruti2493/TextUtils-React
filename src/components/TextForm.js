import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Coverted to Uppercase', 'success');
    };

    const handleLoClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('Coverted to Lowercase', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        let clearText = "";
        setText(clearText);
        props.showAlert('Cleared the text', 'success');

    };

    const handleSeClick = () => {
        let newString = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => {
                return c.toUpperCase();
            });
        setText(newString);
        props.showAlert('Converted to Sentencecase', 'success')
    };

    const handleCopy = () => {
        let copyText = document.getElementById("myText");

        // Select the text field
        copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        document.getSelection().removeAllRanges();

        props.showAlert('Copied text', 'success');

    };

    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Removed extra spaces', 'success');

    };

    const [text, setText] = useState("");

    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="myText"
                    onChange={handleOnChange}
                    value={text}
                    rows="8"
                ></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-sm btn-primary me-2 my-1" onClick={handleUpClick}>
                Convert to uppercase
            </button>
            <button disabled={text.length === 0} className="btn btn-sm btn-primary me-2 my-1" onClick={handleLoClick}>
                Convert to lowercase
            </button>
            <button disabled={text.length === 0} className="btn btn-sm btn-primary me-2 my-1" onClick={handleClearClick}>
                Clear Text
            </button>
            <button disabled={text.length === 0} className="btn btn-sm btn-primary me-2 my-1" onClick={handleSeClick}>
                Convert to sentencecase
            </button>
            <button disabled={text.length === 0} className="btn btn-sm btn-primary me-2 my-1" onClick={handleCopy}>
                Copy text
            </button>
            <button disabled={text.length === 0} className="btn btn-sm btn-primary me-2 my-1" onClick={handleExtraSpaces}>
                Remove Extra Space
            </button>
            <div className="my-2">
                <h6>Your text summary</h6>
                <p>
                    {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
                </p>
                <p>{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} Minutes to read </p>

                <h6>Preview</h6>
                <p>{text.length > 0 ? text : 'Enter something in text box to preview it'}</p>
            </div>
        </div>
    );
}
