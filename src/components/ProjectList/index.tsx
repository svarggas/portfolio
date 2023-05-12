import { FC } from 'react';
import { Row, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { styled } from 'styled-components';

import ProjectCard from '../ProjectCard';
import projects from './projects';

const ProjectListContainer = styled(Row)`
    margin-top: 100px;
`;

const Title = styled.h2`
    margin-bottom: 50px;
`;

const ProjectList: FC = () => (
    <ProjectListContainer id="projects">
        <Col>
            <Title>
                Projects {" "}
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                        <Tooltip>
                            More detail of the projects in the github page
                        </Tooltip>
                    }
                >
                    <Button variant='outline-dark' className='rounded-circle btn-icon btn-sm'>
                        <i className='bi bi-info' />
                    </Button>
                </OverlayTrigger>
            </Title>
            <Row>
                {
                    projects.map((project, index) => (
                        <Col 
                            key={index}
                            xxl={4}
                            xl={6}
                            sm={12}
                        >
                            <ProjectCard {...project} />
                        </Col>
                    ))
                }
            </Row>
        </Col>
    </ProjectListContainer>
);

export default ProjectList;