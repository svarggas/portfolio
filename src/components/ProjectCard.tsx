import { FC } from 'react';
import { Card } from 'react-bootstrap';

import EmptyCard from './EmptyCard';
import Icon from './Icon';
import { styled } from 'styled-components';

const SizingContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
`;

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    github: string;
    demo: string;
    empty?: boolean;
}

const ProjectCard:FC<ProjectCardProps> = ({ imageSrc, title, description, github, demo, empty }) => {

    if(empty) {
        return (
            <SizingContainer>
                <EmptyCard />
            </SizingContainer>
        );
    }

    return (
        <SizingContainer>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                    <Card.Title> { title } </Card.Title>
                    <Card.Text>
                        { description }
                    </Card.Text>
                    <Icon
                        name='Github'
                        icon='bi-github'
                        href={github}
                    />
                    <Icon
                        name='Demo'
                        icon='bi-globe'
                        href={demo}
                    />
                </Card.Body>
            </Card>
        </SizingContainer>
    )
};

export default ProjectCard;