import React from 'react';
import Layout from 'components/Layout';
import CardProject from 'components/CardProject';
import HeroSection from 'components/HeroSection';

const Home = () => {
    return (
        <div className='content-wrap'>
            <HeroSection />
            <Layout>
                <CardProject />
            </Layout>
        </div>
    );
}

export default Home
