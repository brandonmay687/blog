import React, { useState } from "react";
import { send } from 'emailjs-com';

import '../Styles/Contact.css';

const initialToSendValues = {
    first_name: '',
    last_name: '',
    company: '',
    to_name: 'Brandon',
    message: '',
    reply_to: ''
}

const Contact_ME = () => {
    const [ toSend, setToSend ] = useState(initialToSendValues);

    const handleChange = (e) => {
        setToSend({
            ...toSend,
            [ e.target.name ] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_jz2m52v',
            'template_tb5wxdh',
            toSend,
            'user_oyJZ5gwvwLr6bxDGvnyxt'
        )
            .then(response => {
                console.log('SUCCESS!', response.status, response.text)
            })
            .catch(err => {
                console.log('FAILED...', err)
            })
        setToSend(initialToSendValues);
    }

    return (
        <div className = 'contact-me'>
            <form onSubmit={onSubmit} className = 'contact-form'>
                <div className = 'name'>
                    <label>First name: <span className = 'red'>*</span>
                    <input
                        type='text'
                        name='first_name'
                        value={toSend.first_name}
                        onChange={handleChange}
                        className = 'form-element'
                    />
                    </label><br />

                    <label>Last name: <span className = 'red'>*</span>
                    <input
                        type='text'
                        name='last_name'
                        value={toSend.last_name}
                        onChange={handleChange}
                        className = 'form-element'
                    />
                    </label><br />
                </div><br /><br />
                <label>Company(optional): </label><br />
                <input
                    type='text'
                    name='company'
                    value={toSend.company}
                    onChange={handleChange}
                    className = 'form-element'
                /><br /><br />

                <label>Email: <span className = 'red'>*</span></label><br />
                <input
                    type='text'
                    name='reply_to'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    className = 'form-element'
                /><br /><br />

                <label>Message: <span className = 'red'>*</span></label><br />
                <textarea
                    type='text'
                    name='message'
                    value={toSend.message}
                    onChange={handleChange}
                    className = 'form-element'
                /><br /><br /><br /><br />
                <button type = 'submit' className = 'form-element'>Submit</button>
            </form>
        </div>
    )
}

export default Contact_ME;