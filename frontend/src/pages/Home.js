import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import CardProject from 'components/CardProject';
import HeroSection from 'components/HeroSection';
import { getAllProjects } from 'api/project';

const Home = () => {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setProjects(await getAllProjects());
        };
        fetchData();
    }, [])

    return (
        <div className='content-wrap'>
            <HeroSection />
            <Layout>
                {projects !== null ?
                    <>
                        <CardProject project={projects[0]} />
                    </>
                    : "Loading..."}
            </Layout>
        </div>
    );
}

export default Home
