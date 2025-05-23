import {StyledHeader} from "./styled";

import { Logo} from "./components/Logo/Logo";
import {Navigation} from "./components/Navigation/Navigation";
import {Language} from "./components/Language/Language";
import {WatchList} from "./components/WatchList/WatchList";
import {Search} from "./components/Search/Search";
import {MyButton} from "../../components/ui/DropDownUi/DropDownUi";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
            <WatchList/>
            <Search/>
            <Language/>
            <MyButton/>
        </StyledHeader>
    )
}