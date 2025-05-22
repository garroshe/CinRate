import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import { routesBook } from "./routes";
import { Movie } from "../pages/Movie/Movie";
import { Series } from "../pages/Series/Series";
import { Cartoons } from "../pages/Cartoons/Cartoons";
import { People } from "../pages/People/People";
import { Tops } from "../pages/Tops/Tops";
import { Home } from "../pages/Home/Home";
export const Router = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: routesBook.movie(), element: _jsx(Movie, {}) }), _jsx(Route, { path: routesBook.series(), element: _jsx(Series, {}) }), _jsx(Route, { path: routesBook.cartoons(), element: _jsx(Cartoons, {}) }), _jsx(Route, { path: routesBook.people(), element: _jsx(People, {}) }), _jsx(Route, { path: routesBook.tops(), element: _jsx(Tops, {}) }), _jsx(Route, { path: routesBook.home(), element: _jsx(Home, {}) })] }));
};
