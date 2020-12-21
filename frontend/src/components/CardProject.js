import React from 'react';
import { Button } from 'react-bootstrap';
import { getLongDateTime } from 'utilities/date';
import './CardProject.css';
import ReactMarkdown from 'react-markdown';


const CardProject = ({ key, project }) => {

    return (
        <div className='project-container'>
            <div className="project-title">
                <h2>{project.name}</h2>
                <div className="project-languages">
                    {project.languages.map(listItem =>
                        <div key={listItem[0]}>
                            {listItem[0]}
                        </div>
                    )}
                </div>
            </div>
            <div className="project-body">
                <div className='project-readme'>
                    <ReactMarkdown allowDangerousHtml >
                        {atob(project.readme)}
                    </ReactMarkdown>
                </div>
                <div className='project-details'>
                    <div>
                        <strong>Created:</strong> 
                        <span>
                            {getLongDateTime(project.created_at)}
                        </span>
                    </div>
                    <div>
                        <strong>Last updated:</strong>
                        <span>
                            {getLongDateTime(project.updated_at)}
                        </span>
                    </div>
                    {project.homepage !== null && project.homepage !== '' ?
                        <Button variant='dark' href={project.homepage} target='_blank' rel='noreferrer' block >
                            Website
                        </Button>
                        : null}
                    <Button variant='dark' href={project.html_url} target='_blank' rel='noreferrer' block >
                        Project on github
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardProject;
