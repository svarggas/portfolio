import { FC } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { styled } from "styled-components";

import CV from "../docs/SebastianVargasRojas.pdf";

const IconContainer = styled.div`
  margin: 5px;
  display: inline-block;
`;

interface IconProps {
  name: string;
  icon: string;
  href: string;
  variant?: string;
}

const Icon: FC<IconProps> = ({ name, icon, href, variant = "dark" }) => {

  const getTooltip = () => (
    <Tooltip id={name}>
      {name}
    </Tooltip>
  );

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "SebastianVargasRojas.pdf";
    link.dispatchEvent(new MouseEvent("click"));
  }

  const goTo = () => {
    if (name === "CV") downloadCV();
    else window.open(href, "_blank")
  };

  return (
    <IconContainer>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={getTooltip()}
      >
        <Button
          variant={variant}
          onClick={() => goTo()}
        >
          <i className={`bi ${icon}`} />
        </Button>
      </OverlayTrigger>
    </IconContainer>
  )
};

export default Icon;