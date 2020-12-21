import React, { useState } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

const ScrollMenu = ({ projects }) => {

    const [counter, setCounter] = useState(0);

    const rightArrowClicked = () => {
        if (counter === (projects.length - 1)) return;
        setCounter(counter + 1);
    }

    const leftArrowClicked = () => {
        if (counter === 0) return;
        setCounter(counter - 1);
    }

    return (
        <>
            {counter !== 0
                ? <RiArrowDropLeftLine className='scroll-menu-arrow' onClick={leftArrowClicked} style={{ left: 60 }} />
                : null}
            {counter !== (projects.length - 1)
                ? <RiArrowDropRightLine className='scroll-menu-arrow' onClick={rightArrowClicked} style={{ right: 60 }} />
                : null}
            {projects[counter]}
        </>
    );
}

export default ScrollMenu;
