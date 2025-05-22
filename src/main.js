import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './localizetion/i18n.config';
import App from './App';
import { GlobalStyle } from "./assets/styles/globalStyles";
createRoot(document.getElementById('root')).render(_jsxs(StrictMode, { children: [_jsx(GlobalStyle, {}), _jsx(App, {})] }));
