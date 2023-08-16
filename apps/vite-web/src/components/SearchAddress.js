import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { List } from './List';
// categories
export const api = async () => {
    const res = await fetch('https://api.publicapis.org/random', {
        method: 'GET',
    });
    const result = (await res.json());
    // console.log(result)
    return result.entries;
};
export const SearchAddress = () => {
    // Access the client
    // const queryClient = useQueryClient()
    // Queries
    const { data } = useQuery({
        queryKey: ['todos'],
        queryFn: api,
        // 이전 데이터 유지 옵션
        // keepPreviousData: true,
        // stale 상태 1분으로 설정
        // refetchInterval: 5000,
    });
    // Mutations
    // const mutation = useMutation({
    //   mutationFn: api,
    //   onSuccess: () => {
    //     // Invalidate and refetch
    //     queryClient.invalidateQueries({ queryKey: ['todos'] })
    //   },
    // })
    const { register, setValue, handleSubmit,
    // formState: { errors },
     } = useForm();
    const [text, setText] = useState({
        first: '',
        last: '',
        isOpen: false,
    });
    const onChange = (e, type) => {
        setText({ ...text, [type]: e.target.value });
    };
    const onSubmit = handleSubmit((data) => console.log(data));
    console.log(text);
    return (_jsxs("form", { onSubmit: onSubmit, children: [data &&
                data?.map((item) => {
                    return (_jsxs("div", { children: [_jsx("span", { children: item.API }, void 0), _jsx("span", { children: item.Category }, void 0), _jsx("span", { children: item.Description }, void 0)] }, item.Category));
                }), _jsx("label", { children: "First Name" }, void 0), _jsx("input", { ...register('firstName'), onChange: (e) => onChange(e, 'first') }, void 0), _jsx("label", { children: "Last Name" }, void 0), _jsx("input", { ...register('lastName'), onChange: (e) => onChange(e, 'last') }, void 0), _jsx("button", { type: "button", onClick: () => {
                    const { isOpen } = text;
                    setValue('firstName', '');
                    setValue('lastName', '');
                    setText({ ...text, first: '', last: '' });
                    // mutation.mutate()
                }, children: "SetValue" }, void 0), _jsx(List, {}, void 0)] }, void 0));
};
