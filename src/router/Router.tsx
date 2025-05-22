import {Route, Routes} from "react-router-dom";
import {routesBook} from "./routes";

import {Movie} from "../pages/Movie/Movie";

export const Router = () => {
    return (
        <Routes>
            <Route path={routesBook.movie()} element={<Movie/>}/>
        </Routes>
    )
}