export async function searchContent(query) {
    const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master`;
  
    const gqlQuery = {
      query: `
        query SearchContent($search: String!) {
          booksCollection(where: { title_contains: $search }, limit: 5) {
            items { sys { id } title }
          }
          poemCollection(where: { title_contains: $search }, limit: 5) {
            items { sys { id } title }
          }
          blogPostCollection(where: { title_contains: $search }, limit: 5) {
            items { sys { id } title }
          }
          collectionsCollection(where: { title_contains: $search }, limit: 5) {
            items { sys { id } title }
          }
        }
      `,
      variables: { search: query },
    };
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(gqlQuery),
    });
  
    const data = await response.json();
    if (!response.ok) {
      console.error("Contentful error:", data);
      throw new Error(`Contentful request failed: ${response.status}`);
    }
  
    return data.data;
  }
  