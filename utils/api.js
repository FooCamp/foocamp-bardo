import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function getPageData(pageSlug) {
  const response = await client.getEntries({ content_type: 'page' });

  const targetPage = response.items.find((page) => page.fields.slug === pageSlug);

  const pageData = await client.getEntry(targetPage.sys.id);

  return pageData;
}
