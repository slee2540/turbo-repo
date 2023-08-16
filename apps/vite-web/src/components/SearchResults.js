import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useAlgolia from './useAlgolia';
export default function SearchResults({ query = '' }) {
    // id가 존재할 때만 쿼리 요청을 한다.
    // const { data } = useQuery(['todos', id], () => fetchTodoById(id), {
    //   enabled: !!id,
    // })
    const { hits, isLoading, isFetching, status, hasNextPage, isFetchingNextPage, fetchNextPage, } = useAlgolia({
        indexName: 'bestbuy',
        query,
        hitsPerPage: 5,
        staleTime: 1000 * 3,
        cacheTime: 1000 * 60 * 15,
        enabled: !!query, // query가 있을경우만
    });
    if (!query)
        return null;
    if (isLoading)
        return _jsx("div", { className: "loading", children: "Loading..." }, void 0);
    return (_jsxs("div", { children: [_jsxs("div", { className: "search-status", children: ["Satus: ", status, " ", isFetching && _jsx("span", { children: "fetching..." }, void 0)] }, void 0), _jsxs("div", { children: [_jsx("div", { className: "search-result", children: hits && hits.length > 0 ? (hits.map((product) => (_jsxs("li", { className: "product", children: [_jsx("span", { className: "product-name", children: product.name }, void 0), product.shortDescription && (_jsxs(_Fragment, { children: [_jsx("br", {}, void 0), _jsx("span", { className: "product-description", children: product.shortDescription }, void 0)] }, void 0)), _jsx("br", {}, void 0), _jsxs("span", { className: "product-price", children: ["$", product.salePrice] }, void 0)] }, product.objectID)))) : (_jsx("h3", { children: "No products found!" }, void 0)) }, void 0), hasNextPage && (_jsx("div", { className: "search-more", onClick: () => fetchNextPage(), children: "more" }, void 0)), isFetchingNextPage && (_jsx("div", { className: "search-status", children: "Fetching next page..." }, void 0))] }, void 0)] }, void 0));
}
