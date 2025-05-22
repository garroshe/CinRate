import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './localizetion/i18n.config';

import App from './App'

import {GlobalStyle} from "./assets/styles/globalStyles";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GlobalStyle/>
      <App />
  </StrictMode>,
)
