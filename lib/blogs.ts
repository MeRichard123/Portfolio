const URL = "https://dev.to/api/articles";


export const getArticleSlugs = async () => {
    const res = await fetch(`${URL}?username=merichard123`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();

    return data.map((item: any) => {
        return {
            params: {
                blog: item.slug,
            }
        }
    })
}


export const getArticle = async (slug: string) => {
    const res = await fetch(`${URL}/merichard123/${slug}`, {
        method: "GET",
        headers: {
           'Content-Type': 'application/json'
       } 
    })
    const article = await res.text();
    try {
        const articleData = JSON.parse(article);
        return articleData;
    } catch {
        return article;
    }
}