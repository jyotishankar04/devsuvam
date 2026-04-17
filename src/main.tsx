import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <BrowserRouter>
      <AuthProvider>
      <ThemeProvider  storageKey='vite-ui-theme'>
        <App />
      </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
