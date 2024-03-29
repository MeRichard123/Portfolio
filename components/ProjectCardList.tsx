import styled from '@emotion/styled';
import ProjectCard from './ProjectCard';

const Container = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

interface CardProps{
    title: string;
    desc: string;
    site: string;
    code: string;
    hasSite: boolean;
}

function ProjectCardList({ cardData }:any) {
  return (
    <Container>
      {cardData.map((data:CardProps, index:number) => (
        <ProjectCard
          key={index}
          title={data.title}
          desc={data.desc}
          site={data.site}
          code={data.code}
          hasSite={data.hasSite}

        />
      ))}
    </Container>
  );
}

export default ProjectCardList;
