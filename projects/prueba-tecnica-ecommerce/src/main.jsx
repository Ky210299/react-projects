import './style.css'
import { App } from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <FiltersProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FiltersProvider>
)
