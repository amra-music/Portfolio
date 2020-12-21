import React from 'react';
import Container from 'react-bootstrap/Container';

const ProjectsContainer = () => {

  const ArrowRight = <RightOutlined className="page-arrow"/>;

  return (
    <ScrollMenu
      data={getProjects}
      alignCenter={false}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      wheel={false}
      itemClass="res-item"
    />
  );
}

export default ProjectsContainer;
