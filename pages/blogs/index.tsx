import styled from '@emotion/styled';
import BlogCard from '../../components/BlogCard';

const Main = styled.main`
  margin-top: 10vh;
  text-align: center;  
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export interface User {
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
}

export interface PostType {
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
    edited_at?: any;
    crossposted_at?: any;
    published_at: Date;
    last_comment_at: Date;
    reading_time_minutes: number;
    tag_list: string[];
    tags: string;
    user: User;
}

interface PropType{
    posts?: PostType[]
}

const index = ({ posts }:PropType) => (
  <Main>
    <h2>My Blogs</h2>
    <FlexContainer>
      {posts?.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          date={post.readable_publish_date}
          desc={post.description}
          tags={post.tag_list}
          slug={post.slug}
        />
      ))}
    </FlexContainer>
  </Main>
);

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=merichard123', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data:PostType[] = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default index;
