const API = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE}`;

interface ItemType {
  slug: string;
}

export async function getAllPageIds(query:string) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  };

  const res = await fetch(API, fetchOptions).then((response) => response.json());
  const data = res.data.projectEntryCollection.items;
  return data.map((item : ItemType) => ({
    params: {
      project: item.slug,
    },
  }));
}

const queryGen = (slug: string) => `
  {
    projectEntryCollection(where: {slug: "${slug}"}){
      items{
        title,
        headerImage{
          url,
          width,
          height
        },
        techStack,
        contentMd,
        siteLink,
        blogLink,
        codeLink,
        demoLink
      }
    }
  }`;

export async function getPageData(id: string) {
  const query = queryGen(id);

  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  };

  const res = await fetch(API, fetchOptions).then((response) => response.json());
  const data = res.data.projectEntryCollection.items;

  return {
    id,
    data,
  };
}
