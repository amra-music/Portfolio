import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import battleship from '../assets/battleship.png';
import augumentedReality from '../assets/augumentedReality.png';
import web from '../assets/web.png';
import payment from '../assets/payment.jpg';
import augumentedAppFrameworks from '../assets/augumentedApp.png';
import javaFx from '../assets/javaFX.png';
import springBoot from '../assets/springBoot.png';
import webTools from '../assets/webT.png';

const CardProject = () => {
    return (
        <div className='cards-container'>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={battleship} style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-battleship'>
                        <Link className='flip-card-link flip-card-link-battleship' to='/battleship'>Battleship</Link>
                        <img className='framework-image' alt='frameworks' src={javaFx} style={{ width: '100px', height: '100px' }} />
                    </div>
                </div>
            </Card>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={augumentedReality} style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-augumented'>
                        <Link className='flip-card-link flip-card-link-augumented' to='/augumentedReality'>Augumented reality Taj ul</Link>
                        <img className='framework-image' alt='frameworks' src={augumentedAppFrameworks} style={{ width: '300px', height: '100px' }} />
                    </div>
                </div>
            </Card>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={web} style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-web'>
                        <Link className='flip-card-link flip-card-link-web' to='/webApp'>Web app</Link>
                        <img className='framework-image' alt='frameworks' src={webTools} style={{ width: '300px', height: '100px' }} />
                    </div>
                </div>
            </Card>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={payment} style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-payment'>
                        <Link className='flip-card-link flip-card-link-payment' to='/paymentServer'>Payment server</Link>
                        <img className='framework-image' alt='frameworks' src={springBoot} style={{ width: '200px', height: '80px' }} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardProject;
