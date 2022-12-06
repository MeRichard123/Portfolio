import { getAllPageIds, getPageData } from '../../lib/projects';
import MarkdownView from 'react-showdown';
import Image from 'next/image';
import ProjectLayout from '../../layouts/ProjectLayout';
import styled from "@emotion/styled";
import Button from '../../components/Button';
import {PageDataType} from '../../lib/projectTypes'

const TechStack = styled.p`
    text-align: center;
    color: gray;
    font-weight: bold;
    font-size: clamp(0.9rem, 1.1rem, 1.3rem);
    margin: 50px auto;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  justify-content: center;
`;

const project = ({ pageData }: PageDataType) => {
  return (
    <div style={{marginTop: "50px", minHeight:"100vh"}}>
      <div>
        <ProjectLayout>
          <h2>{pageData.title}</h2>
          <Image src={pageData.headerImage.url} width={pageData.headerImage.width} height={pageData.headerImage.height} alt="Project image" />
          <TechStack>{pageData.techStack}</TechStack>
            <MarkdownView
            markdown={pageData.contentMd}
            style={{
              maxWidth: "80%",
              textAlign: "left"
            }}
              />
              <StyledButtonGroup>
            {pageData.siteLink && <Button link={pageData.siteLink}>Live Site</Button>}
            {pageData.codeLink && <Button link={pageData.codeLink}>See Code</Button>}
            {pageData.blogLink && <Button link={pageData.blogLink}>See Blog</Button>}
            {pageData.demoLink && <Button link={pageData.demoLink}>Demo</Button>}
          </StyledButtonGroup>          
        </ProjectLayout>
      </div>
    </div>
  )
}

const IdsQuery = `{
  projectEntryCollection{
    items{
      slug
    }
  }
}`;

export async function getStaticPaths() {
  const paths = await getAllPageIds(IdsQuery);

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const pageData = await getPageData(params.project);
  
  return {
    props: {
      pageData: pageData.data[0],
    },
  };
}


export default project