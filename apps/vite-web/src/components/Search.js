import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import SearchResults from './SearchResults';
export function Search() {
    const [query, setQuery] = useState('');
    const handleOnChange = (event) => {
        event.preventDefault();
        // It is recommended to debounce this event in prod
        setQuery(event.target.value);
    };
    return (_jsxs("div", { children: [_jsx("input", { onChange: handleOnChange, value: query, placeholder: "Search products" }, void 0), _jsx(SearchResults, { query: query }, void 0)] }, void 0));
}
