import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Courses from './components/courses.jsx'
import Equipments from './components/equipments.jsx'
import About from './components/about.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Courses />
  },
  {
    path: "/equipments",
    element: <Equipments />
  },
  {
    path: "/about",
    element: <About />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
