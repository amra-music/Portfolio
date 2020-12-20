import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import CardProject from 'components/CardProject';
import HeroSection from 'components/HeroSection';
import { getAllProjects, getProjectLanguages, getProjectReadme } from 'api/project';
import { Spinner } from 'react-bootstrap';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { RiArrowDropRightLine, RiArrowDropLeftLine } from 'react-icons/ri';

import './Home.css';

const Home = () => {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProjects();
                for(const project of data) {
                    project.languages = await getProjectLanguages(project.name);
                    project.readme = await getProjectReadme(project.name);
                }
                setProjects(data);
            } catch (e) {}
        };
        fetchData();
    }, [])

    const getProjectsArray = () => {
        return projects.map(project => <CardProject project={project} />);
    }

    return (
        <div className='content-wrap'>
            <HeroSection />
            <Layout>
                {console.log(projects)}
                {projects !== null ?
                    <ScrollMenu
                        data={getProjectsArray()}
                        alignCenter={false}
                        arrowLeft={<RiArrowDropLeftLine />}
                        arrowRight={<RiArrowDropRightLine />}
                        wheel={false}
                        itemClass="project-item"
                    />
                    :
                    <Spinner className='projects-spinner' animation="border"></Spinner>
                }
            </Layout>
        </div>
    );
}

export default Home
