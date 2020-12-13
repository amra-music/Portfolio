import React from 'react';
import { pageNotFoundImage } from '../assets/appUrls';

const PageNotFound = () => {
    return (
        <div className='content-wrap'>
            <div className='pageNotFound-title'>Page not found</div>
            <div className='pageNotFoundImageWrap'>
                <img alt='pageNotFoundImage' src={pageNotFoundImage} style={{width: 350, height: 350}}/>
            </div>
        </div>
    );
}

export default PageNotFound;