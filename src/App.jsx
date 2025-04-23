import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { FetchMeal } from './component/FetchMeal.jsx'

function App() {
    const client = new QueryClient();
  return (
    <div>
      < QueryClientProvider client={client}>
      <FetchMeal />
      </QueryClientProvider>
</div>
  )
}

export default App
