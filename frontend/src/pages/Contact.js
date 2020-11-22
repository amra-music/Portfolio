import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';


const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: process.env.REACT_APP_HOST_URL + "/send",
            data: { name, email, subject, message }
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                resetForm();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.");
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
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default Contact;
