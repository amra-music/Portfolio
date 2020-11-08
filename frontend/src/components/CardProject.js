import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import battleship from '../assets/battleship.png';
import augumentedReality from '../assets/augumentedReality.png';
import payment from '../assets/payment.jpg';

function cardProject() {
    return (
        <div className='cards-container'>
            <Card className='card' style={{ width:500, height:285}}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={battleship} style={{ width: '500px', height: '285px', borderRadius:20 }} />
                    </div>
                    <div className='card-back'>
                        <Card.Body >
                            <Link className='flip-card-link' to='/battleship'>Battleship</Link>
                            <Card.Text>
                                Desktop strategy game Battleship implemented in the JavaFX framework with AI strategies comparison.
                    </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
            <Card className='card' border='info' style={{ width: '30rem', height: '25rem' }}>
                <Card.Img variant="top" src={battleship} />
                <Card.Body>
                    <Link className='card-link' to='/battleship'>Battleship</Link>
                    <Card.Text>
                        Desktop strategy game Battleship implemented in the JavaFX framework with AI strategies comparison.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' border='info' style={{ width: '30rem' }}>
                <Card.Img variant="top" src={battleship} />
                <Card.Body>
                    <Link className='card-link' to='/webApp'>Web app</Link>
                    <Card.Text>
                        A web app developed for the Web technology subject at the Faculty of Electrical Engineering, Sarajevo
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' border='info' style={{ width: '30rem', height: '25rem' }}>
                <Card.Img variant="top" src={augumentedReality} />
                <Card.Body>
                    <Link className='card-link' to='/augumentedReality'>Augumented reality Taj ul</Link>
                    <Card.Text>
                        Android application of a Taj Ul mosque designed in a Blender and imported into Unity.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' border='info' style={{ width: '30rem', height: '25rem' }}>
                <Card.Img variant="top" src={payment} />
                <Card.Body>
                    <Link className='card-link' to='/paymentServer'>Payment server</Link>
                    <Card.Text>
                        Payment server is one part of information system for selling and charging products and services which is a big student project.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default cardProject;
