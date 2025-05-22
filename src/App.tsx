import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./layouts/Header/Header.tsx";
import {theme} from "./themes/themes.ts";
import {Router} from "./router/Router";

function App() {
  return (
    <>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header />
                <Router/>
            </ThemeProvider>
        </BrowserRouter>
    </>
  )
}

export default App