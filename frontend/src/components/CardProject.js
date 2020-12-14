import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { augumentedRealityProjectFrameworks, augumentedRealityImage, battleshipImage, battleshipProjectFrameworks, hallScheduleImage, hallScheduleProjectFrameworks, paymentServerImage, paymentServerProjectFrameworks } from 'assets/appUrls';



const CardProject = () => {
    return (
        <div className='cards-container'>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={battleshipImage} alt='projectImage' style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-battleship'>
                        <Link className='flip-card-link flip-card-link-battleship' to='/battleship'>Battleship</Link>
                        <img className='framework-image' alt='frameworks' src={battleshipProjectFrameworks} style={{ width: '100px', height: '100px' }} />
                    </div>
                </div>
            </Card>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={augumentedRealityImage} style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-augumented'>
                        <Link className='flip-card-link flip-card-link-augumented' to='/augumentedReality'>Augumented reality Taj ul</Link>
                        <img className='framework-image' alt='frameworks' src={augumentedRealityProjectFrameworks} style={{ width: '300px', height: '100px' }} />
                    </div>
                </div>
            </Card>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={hallScheduleImage} style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-web'>
                        <Link className='flip-card-link flip-card-link-web' to='/webApp'>Web app</Link>
                        <img className='framework-image' alt='frameworks' src={hallScheduleProjectFrameworks} style={{ width: '300px', height: '100px' }} />
                    </div>
                </div>
            </Card>
            <Card className='card' style={{ width: 500, height: 285 }}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img alt='projectImage' src={paymentServerImage} style={{ width: '500px', height: '285px', borderRadius: 20 }} />
                    </div>
                    <div className='card-back card-back-payment'>
                        <Link className='flip-card-link flip-card-link-payment' to='/paymentServer'>Payment server</Link>
                        <img className='framework-image' alt='frameworks' src={paymentServerProjectFrameworks} style={{ width: '200px', height: '80px' }} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardProject;
