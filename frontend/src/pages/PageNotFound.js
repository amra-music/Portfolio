import React from 'react';
import pageNotFound from '../assets/pageNotFound.png';

const PageNotFound = () => {
    return (
        <div className='content-wrap'>
            <div className='pageNotFound-title'>Page not found</div>
            <div className='pageNotFoundImageWrap'>
                <img alt='pageNotFoundImage' src={pageNotFound} style={{width: 350, height: 350}}/>
            </div>
        </div>
    );
}

export default PageNotFound;