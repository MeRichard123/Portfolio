import styled from '@emotion/styled';
import Link from 'next/link';
import MarkdownView from 'react-showdown';
import { getArticle, getArticleSlugs } from '../../lib/blogs';

// if you ever do dark mode remove the path to css and leave the first part
// it comes with prefers colour scheme.
import 'github-markdown-css/github-markdown-light.css';

const StyledMain = styled.main`
    text-align: center;
    margin-top: 10vh;
`;

const StyledTitle = styled.h2`
    margin-bottom: 20px;
`;

const StyledLink = styled.p`
    color: blue;
    text-decoration: underline;
`;
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Lora', serif;
    font-size: 70%;
    margin: 30px 10px;
    max-width: 120ch;
    line-height: 30px;
    padding: 50px 0;
`;

export interface User {
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    user_id: number;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
}

export interface ArticleType {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id?: any;
    published_timestamp: Date;
    positive_reactions_count: number;
    cover_image: string;
    social_image: string;
    canonical_url: string;
    created_at: Date;
    edited_at: Date;
    crossposted_at?: any;
    published_at: Date;
    last_comment_at: Date;
    reading_time_minutes: number;
    tag_list: string;
    tags: string[];
    body_html: string;
    body_markdown: string;
    user: User;
}

interface PropTypes {
    article: ArticleType;
}

const blog = ({ article }: PropTypes) => (
  <StyledMain>
    <StyledTitle>{article.title}</StyledTitle>
    {/* // TypeError: Cannot destructure property 'auth' of 'urlObj' as it is undefined
      // https://github.com/wpengine/faustjs/issues/361
      // this was fixed by ?? '' */}
    <Link href={article.url ?? ''} target="_blank" rel="noopener noreferrer">
      <StyledLink>
        Read the Original on Dev.to
      </StyledLink>
    </Link>
    <StyledBody className="markdown-body">
      <MarkdownView
        markdown={article.body_markdown}
        style={{
          textAlign: 'left',
        }}
      />
    </StyledBody>
  </StyledMain>
);
// ISR Magic
export const getStaticPaths = async () => {
  const slugs = await getArticleSlugs();
  const paths: string[] = slugs;

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }:any) => {
  const articleData = await getArticle(params.blog);
  const ArticleData: ArticleType[] = articleData;

  return {
    props: {
      article: ArticleData,
    },
    revalidate: 10,
  };
};

export default blog;
