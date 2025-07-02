import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Router'
import AuthProvider from './context/AuthContext/AuthProvider'
import { ThemeProvider } from './context/ThemeContext/ThemeProvider'

window.onbeforeunload = () => {
  window.scrollTo(0,0)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
