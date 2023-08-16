import algoliasearch from 'algoliasearch';
// From Algolia example
// https://github.com/algolia/react-instantsearch
const ALGOLIA_APP_ID = 'latency';
const ALGOLIA_SEARCH_API_KEY = '6be0576ff61c053d5f9a3225e2a90f76';
export async function search({ indexName, query, pageParam = 0, hitsPerPage = 10, }) {
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY);
    const index = client.initIndex(indexName);
    console.log('alogolia:search', { indexName, query, pageParam, hitsPerPage });
    const { hits, page, nbPages } = await index.search(query, {
        page: pageParam,
        hitsPerPage,
    });
    const nextPage = page + 1 < nbPages ? page + 1 : undefined;
    return { hits, nextPage };
}
