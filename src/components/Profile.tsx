import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { styled } from "styled-components";

import ProfileImage from "./ProfileImage";
import Icon from "./Icon";

const ProfileContainer = styled(Row)`
  margin-top: 100px;
`;

const Profile: FC = () => {

  const icons = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/in/svarggas/"
    },
    {
      name: "GitHub",
      icon: "bi-github",
      href: "https://github.com/svarggas"
    },
    {
      name: "CV",
      icon: "bi-file-earmark-person",
      href: "#",
    },
  ];

  return (
    <ProfileContainer id="profile">
      <Col className="d-flex justify-content-center">
        <ProfileImage />
      </Col>
      <Col className='d-flex align-items-center'>
        <Row>
          <Col>
            <h1>Sebastian Vargas</h1>
            <p>
              Howdy! <br />
              I'm Sebastian, welcome to my portfolio. If anything here catch your eye, don't hesitate and get in contact. <br />
              It would be a pleasure to get to know you.
            </p>
            <span className='d-flex justify-content-center'>
              {
                icons.map((icon, index) => (
                  <Icon key={index}  {...icon} />
                ))
              }
            </span>
          </Col>
        </Row>
      </Col>
    </ProfileContainer>
  )
};

export default Profile;