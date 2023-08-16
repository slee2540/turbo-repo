// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Button, Header } from 'ui'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { SearchAddress } from './components'
import { Search } from './components'
import './styles.css'

// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
      {/* <SearchAddress /> */}
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
