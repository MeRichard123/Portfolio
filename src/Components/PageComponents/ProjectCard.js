import React from "react";
import styled from "styled-components";
import github from "../../Assets/icons/github-icon.svg";

const Card = styled.div`
  padding: 20px 10px;
  margin: 15px;
  width: 20rem;
  background: #e8f2eb;
  display: flex;
  justify-content: space-evenly;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.a`
  margin: 10px;
  text-decoration: none;
  padding: 5px;
  width: 4em;
  border: 2px solid #31493c;
  color: #31493c;
  transition: all 250ms ease;
  &:hover {
    color: white;
    background: #31493c;
  }
`;

const Image = styled.img`
  height: 5rem;
  margin: auto 10px;
`;

const ProjectCard = ({ title, desc, site, code, hasSite }) => {
  return (
    <Card>
      <Image src={github} alt="" />
      <div>
        <h2>{title}</h2>
  
        <p>{desc}</p>
        <FlexContainer>
          {hasSite ? (
            <Button href={site} target="_blank">
              Site
            </Button>
          ) : (
            ""
          )}

          <Button href={code} target="_blank">
            Code
          </Button>
        </FlexContainer>
      </div>
    </Card>
  );
};

export default ProjectCard;
