import styled from '@emotion/styled';
import Link from 'next/link';


const Card = styled.div`
  padding: 20px 10px;
  margin: 15px;
  width: 20rem;
  background: #f6f6f6;
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
  border: 2px solid black;
  transition: all 250ms ease;
  &:hover {
    color: white;
    background: black;
  }
`;

const Image = styled.img`
  height: 5rem;
  margin: auto 10px;
`;

interface CardProps{
    title: string;
    desc: string;
    site: string;
    code: string;
    hasSite: boolean;
}

const ProjectCard = ({ title, desc, site, code, hasSite }:CardProps) => {
  return (
    <Card>
      <Image src="/assets/github-icon.svg" alt="github logo" />
      <div>
        <h3>{title}</h3>
  
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
