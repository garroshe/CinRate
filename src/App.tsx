import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./layouts/Header/Header";
import {theme} from "./themes/themes";
import {Router} from "./router/Router";
import {MyButton} from "./components/ui/DropDownUi/DropDownUi";

function App() {
  return (
    <>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header />
                <MyButton/>
                <div>I pidar</div>
                <Router/>
            </ThemeProvider>
        </BrowserRouter>
    </>
  )
}

export default App