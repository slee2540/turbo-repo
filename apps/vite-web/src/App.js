import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Button, Header } from 'ui'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { SearchAddress } from './components'
import { Search } from './components';
import './styles.css';
// Create a client
const queryClient = new QueryClient();
function App() {
    return (_jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(Search, {}, void 0), _jsx(ReactQueryDevtools, { initialIsOpen: true }, void 0)] }, void 0));
}
export default App;
