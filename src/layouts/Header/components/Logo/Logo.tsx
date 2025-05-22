import {StyledLogo} from "./styled.tsx";
import {NavLink} from "react-router-dom";

export const Logo = () => {
    return (
        <NavLink to="/home">
            <StyledLogo>CinRate</StyledLogo>
        </NavLink>
    )
}