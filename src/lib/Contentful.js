import { createClient } from "contentful";

export const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});
console.log(process.env.REACT_APP_CONTENTFUL_SPACE_ID, process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN)