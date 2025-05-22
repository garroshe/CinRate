import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledHeader } from "./styled";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { Language } from "./components/Language/Language";
import { WatchList } from "./components/WatchList/WatchList";
import { Search } from "./components/Search/Search";
export const Header = () => {
    return (_jsxs(StyledHeader, { children: [_jsx(Logo, {}), _jsx(Navigation, {}), _jsx(WatchList, {}), _jsx(Search, {}), _jsx(Language, {})] }));
};
