import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { Header } from "./layouts/Header/Header";
import { theme } from "./themes/themes";
import { Router } from "./router/Router";
function App() {
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(Header, {}), _jsx(Router, {})] }) }) }));
}
export default App;
