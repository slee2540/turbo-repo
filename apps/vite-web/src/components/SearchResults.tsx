import useAlgolia from './useAlgolia'

type Product = {
  name: string
  shortDescription: string
  salePrice: number
}

type SearchResultsProps = {
  query: string
}

export default function SearchResults({ query = '' }: SearchResultsProps) {
  // id가 존재할 때만 쿼리 요청을 한다.
  // const { data } = useQuery(['todos', id], () => fetchTodoById(id), {
  //   enabled: !!id,
  // })

  const {
    hits,
    isLoading,
    isFetching,
    status,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useAlgolia<Product>({
    indexName: 'bestbuy',
    query,
    hitsPerPage: 5,
    staleTime: 1000 * 3, // 3s
    cacheTime: 1000 * 60 * 15, // 15m
    enabled: !!query, // query가 있을경우만
  })

  if (!query) return null

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div>
      <div className="search-status">
        Satus: {status} {isFetching && <span>fetching...</span>}
      </div>
      <div>
        <div className="search-result">
          {hits && hits.length > 0 ? (
            hits.map((product) => (
              <li key={product.objectID} className="product">
                <span className="product-name">{product.name}</span>
                {product.shortDescription && (
                  <>
                    <br />
                    <span className="product-description">
                      {product.shortDescription}
                    </span>
                  </>
                )}
                <br />
                <span className="product-price">${product.salePrice}</span>
              </li>
            ))
          ) : (
            <h3>No products found!</h3>
          )}
        </div>
        {hasNextPage && (
          <div className="search-more" onClick={() => fetchNextPage()}>
            more
          </div>
        )}
        {isFetchingNextPage && (
          <div className="search-status">Fetching next page...</div>
        )}
      </div>
    </div>
  )
}
