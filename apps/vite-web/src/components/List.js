import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from '@tanstack/react-query';
import { api } from './SearchAddress';
export const List = () => {
    // Queries
    const { data } = useQuery({
        queryKey: ['todos'],
        queryFn: api,
        keepPreviousData: true,
        // staleTime: 3000,
    });
    return (_jsx("div", { children: data &&
            data?.map((item) => {
                return (_jsxs("div", { children: [_jsx("span", { children: item.API }, void 0), _jsx("span", { children: item.Category }, void 0), _jsx("span", { children: item.Description }, void 0)] }, item.Category));
            }) }, void 0));
};
