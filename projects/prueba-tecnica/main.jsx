import './style.css'
import { App } from './src/App.jsx'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom';

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>

)

