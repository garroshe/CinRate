import { jsx as _jsx } from "react/jsx-runtime";
import { StyledLogo } from "./styled";
import { NavLink } from "react-router-dom";
export const Logo = () => {
    return (_jsx(NavLink, { to: "/home", children: _jsx(StyledLogo, { children: "CinRate" }) }));
};
