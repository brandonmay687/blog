import React, { useState } from "react";
import { send } from 'emailjs-com';
import Image from '../Images/contact-me.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Contact.css';

const initialValues = {
    from_name: '',
    to_name: 'Brandon May',
    message: '',
    reply_to: ''
}

const Contact_ME = () => {
    const [ toSend, setToSend ] = useState(initialValues);

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
        setToSend(initialValues);
    }

    return (
        <div className = 'contact-me'>
            <img src = {Image} alt = 'contact-me-today' />
            <form onSubmit={onSubmit} className = 'contact-form'>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    className = 'form-element'
                />

                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    className = 'form-element'
                />

                <textarea
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                    className = 'form-element'
                />
                <button type = 'submit' className = 'form-element'>Submit</button>
            </form>
        </div>
    )
}

export default Contact_ME;