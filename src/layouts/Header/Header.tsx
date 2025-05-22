import {StyledHeader} from "./styled.tsx";

import { Logo} from "./components/Logo/Logo.tsx";
import {Navigation} from "./components/Navigation/Navigation.tsx";
import {Language} from "./components/Language/Language.tsx";
import {WatchList} from "./components/WatchList/WatchList";
import {Search} from "./components/Search/Search";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
            <WatchList/>
            <Search/>
            <Language/>
        </StyledHeader>
    )
}