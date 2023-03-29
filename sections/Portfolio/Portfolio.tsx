import { useState } from 'react';
import {
  StyledMain, StyledTab, StyledTabs, RestrainedContainer,
} from './Portfolio.styles';
import Button from '../../components/Button';
import CardList from '../../components/CardList';
import FullstackCardList from '../../components/FullstackCardList';

function Portfolio() {
  const [frontend, setFrontend] = useState<boolean>(true);

  const toggle = () => {
    setFrontend((prevState: boolean) => !prevState);
  };

  return (
    <StyledMain id="projects">
      <h2>
        Projects
      </h2>
      <StyledTabs className={frontend ? '' : 'tab-selected'}>
        <StyledTab onClick={toggle}>Frontend</StyledTab>
        <StyledTab onClick={toggle}>Fullstack</StyledTab>
      </StyledTabs>
      <RestrainedContainer>
        {frontend ? <CardList /> : <FullstackCardList />}
      </RestrainedContainer>

      <Button link="/projects">View More</Button>
    </StyledMain>
  );
}

export default Portfolio;
