import React from 'react';
import Jumbo from '../components/Jumbo.js';
import Layout from '../components/Layout.js';
import CardProject from '../components/CardProject.js';

function Home() {
    return (
        <div className='content-wrap'>
            <Jumbo/>
            <Layout>
            <CardProject/>
            </Layout>
        </div>
    );
}

export default Home
