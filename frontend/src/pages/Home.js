import React from 'react';
import Jumbo from 'components/Jumbo';
import Layout from 'components/Layout';
import CardProject from 'components/CardProject';

const Home = () => {
    return (
        <div className='content-wrap'>
            <Jumbo />
            <Layout>
                <CardProject />
            </Layout>
        </div>
    );
}

export default Home
