import React from 'react'
import { Button, Form } from 'react-bootstrap';


function Contact() {
    return (
        <div className='content-wrap, contact-page'>
                <div className='contact-title'>Contact</div>
                <div className='grey-line'></div>
                <form id="contact-form">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="fromMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder='Write here...' />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                </Button>
                </form>
        </div>
    );
}

export default Contact;
