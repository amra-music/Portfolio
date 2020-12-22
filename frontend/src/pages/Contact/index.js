import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

import 'pages/Contact/Contact.css'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [send, setSend] = useState(false);
    const [click, setClick] = useState(false);

    const handleSubmit = (e) => {
        // provjeriti je li forma validna
        e.preventDefault();
        axios({
            method: "POST",
            url: process.env.REACT_APP_HOST_URL + "/send",
            data: { name, email, subject, message }
        }).then((response) => {
            if (response.data.status === 'success') {
                setSend(true);
                console.log("SENT");
                resetForm();
            } else if (response.data.status === 'fail') {
                console.log("Message failed to send.");
                setSend(false);
            }
        })
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div className='content-wrap, contact-page'>
            { !click ? <Alert show={false} ></Alert> : 
                send ? < Alert dismissible={true} variant='success'>Message sent!</Alert>
                    :
                    <Alert variant='danger'>Message not sent!</Alert>
            }
            <div className='contact-title'>Contact</div>
            <div className='grey-line'></div>
            <Form id="contact-form" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Enter name"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control value={subject} onChange={e => setSubject(e.target.value)} name="subject" type="text" placeholder="Enter subject"></Form.Control>
                </Form.Group>
                <Form.Group controlId="fromMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control value={message} onChange={e => setMessage(e.target.value)} name="message" as="textarea" rows="5" placeholder='Write here...' />
                </Form.Group>
                <Button variant="dark" type="submit" onClick={() => setClick(true)}>
                    Submit
                </Button>
            </Form>
        </div >
    )

}

export default Contact;
