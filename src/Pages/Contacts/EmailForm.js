import React from 'react';
import { useState } from 'react';

const EmailForm = () => {
    const[email, setEmail] = useState("");
    const[name, setName] = useState("");
    const[text, setText] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
            <form action="mailto:cprzemek91@hotmail.com" method="post" encType="text/plain" className="form">
                <label htmlFor="e-mail" className="form__label">e-mail: </label>
                <input className="form__text" type="email" name="e-mail" id="e-mail" value={email} onChange={handleEmail}/>
                <label htmlFor="e-mail" className="form__label"> text: </label>
                <textarea className="form__text" name="text" id="text" cols="30" rows="10" value={text} onChange={handleText}></textarea>
                <label htmlFor="e-mail" className="form__label">name: </label>
                <input className="form__text" type="text" name="name" id="name" value={name} onChange={handleName}/>
                <input className="form__button" type="submit" value="Send"/>
                <input className="form__button" type="submit" value="Reset"/>
            </form>
    );
};

export default EmailForm;