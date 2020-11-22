import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaSmileWink } from "react-icons/fa";



const Jumbo = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h2 className='jumbotron-title'>I'm Amra. I'm learning React by making this website, but feel free to look at my other projects and meet me <FaSmileWink /></h2>
                <p className='jumbotron-cite'>
                    “Always remember that you’re unique. Just like everyone else.”
                    </p>
            </Container>
        </Jumbotron>
    )
}

export default Jumbo;
