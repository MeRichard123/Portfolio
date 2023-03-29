import Button from '../../components/Button';
import {
  StyledMain, StyledBlogs, StyledBlogLink, StyledBlog,
  StyledBlogTitle, StyledTitleSecondary, StyledBlogSpan, StyledHeading,
} from './Blog.styles';

function Blog() {
  return (
    <StyledMain id="blog">
      <StyledHeading>My Blog</StyledHeading>
      <StyledTitleSecondary>
        See my blog where I discuss my thoughts and teach others while
        solidifying my own knowledge.
      </StyledTitleSecondary>
      <StyledBlogs>
        <StyledBlogLink
          href="https://dev.to/merichard123/making-my-own-css-framework-50j9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledBlog>
            <StyledBlogTitle>Making my own CSS Framework</StyledBlogTitle>
            <StyledBlogSpan>08/06/2020</StyledBlogSpan>
            <p>
              How I got to building my own CSS Framework
              <br />
              {' '}
              and why you should too!
            </p>
          </StyledBlog>
        </StyledBlogLink>
        <StyledBlogLink
          href="https://dev.to/merichard123/my-website-process-1pg9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledBlog>
            <StyledBlogTitle>My Web Development Process</StyledBlogTitle>
            <StyledBlogSpan>04/04/2020</StyledBlogSpan>
            <p>My Process of going from idea, to design, to code.</p>
          </StyledBlog>
        </StyledBlogLink>
      </StyledBlogs>
      <Button link="/blogs">See All</Button>
    </StyledMain>
  );
}

export default Blog;
