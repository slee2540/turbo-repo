import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RickLayout } from '@layouts'
import { Search } from './components'
import './styles.css'

// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/risk" element={<RickLayout />}></Route>
          {/* <Route path="/risk" element={<>asdf</>}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
