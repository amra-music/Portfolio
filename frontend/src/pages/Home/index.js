import React, { useEffect, useState } from 'react';
import CardProject from 'components/CardProject/index';
import HeroSection from 'components/HeroSection/index';
import { getAllProjects, getProjectLanguages, getProjectReadme } from 'api/project';
import { Spinner } from 'react-bootstrap';
import ScrollMenu from 'components/ScrollMenu/index';

import 'pages/Home/Home.css';

const Home = () => {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProjects();
                for (const project of data) {
                    try {
                        project.languages = await getProjectLanguages(project.name);                          
                        project.readme = await getProjectReadme(project.name);
                    } catch (e) { }
                }
                setProjects(data);
            } catch (e) { }
        };
        fetchData();
    }, [])

    const getProjectsArray = () => {
        return projects.map(project => <CardProject key={project.id} project={project} />);
    }

    return (
        <div className='content-wrap'>
            <HeroSection />
            {projects !== null ?
                <ScrollMenu projects={getProjectsArray()} />
                :
                <Spinner className='projects-spinner' animation="border"></Spinner>
            }
        </div>
    );
}

export default Home
