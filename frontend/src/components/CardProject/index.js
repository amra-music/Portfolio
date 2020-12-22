import React, { useEffect, useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { getLongDateTime } from 'utilities/date';
import { getLanguageIcon } from 'utilities/common';
import ReactMarkdown from 'react-markdown';

import 'components/CardProject/CardProject.css';

const CardProject = ({ project }) => {

    const [totalLines, setTotalLines] = useState(1);

    useEffect(() => {
        setTotalLines(project.languages.reduce((acc, cur) => acc + cur[1], 0));
    }, [project])

    const getIcon = (name, lines) => {
        const popover = (
            <Popover id="popover-basic">
                <Popover.Title as="h3">{name}</Popover.Title>
                <Popover.Content>
                    In this project the representation of {name} language is <strong>{Math.round(((lines / totalLines) * 100 + Number.EPSILON) * 10) / 10}%</strong>.
              </Popover.Content>
            </Popover>
        );

        const icon = getLanguageIcon(name);

        return (
            <OverlayTrigger placement="bottom" overlay={popover}>
                {icon}
            </OverlayTrigger>
        )
    }

    return (
        <div className='project-container'>
            <div className="project-title">
                <h2>{project.name}</h2>
                <div className="project-languages">
                    {project.languages.map(listItem =>
                        <div key={listItem[0]}>
                            {getIcon(listItem[0], listItem[1])}
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
