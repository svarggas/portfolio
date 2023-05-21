import { FC } from "react";
import { Card } from "react-bootstrap";

import EmptyCard from "./EmptyCard";
import Icon from "./Icon";
import { styled } from "styled-components";

const CardContainer = styled(Card)`
  box-shadow: 0 25px 35px 0 rgba(0,0,0,0.4);
`;

const CardBody = styled(Card.Body)`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  min-height: 180px;
`;

const SizingContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

const CardImage = styled(Card.Img)`
  width: 100%;
  height: auto;
  @media (min-width: 480px) {
      min-height: 280px;
      max-height: 280px;
  }
`;

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  github: string;
  demo: string;
  empty?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({ imageSrc, title, description, github, demo, empty }) => {

  if (empty) {
    return (
      <SizingContainer>
        <EmptyCard />
      </SizingContainer>
    );
  }

  return (
    <SizingContainer>
      <CardContainer style={{ width: "30rem" }}>
        <CardImage variant="top" src={imageSrc} />
        <CardBody>
          <Card.Title> {title} </Card.Title>
          <Card.Text>
            {description}
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
        </CardBody>
      </CardContainer>
    </SizingContainer>
  )
};

export default ProjectCard;