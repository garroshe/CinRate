import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledWatchListImg, StyledWatchListText, StyledWatchListWrapper } from "./stylde";
import WatchListSave from '../../../../assets/img/WatchListSave.png';
import { useTranslation } from "react-i18next";
export const WatchList = () => {
    const { t } = useTranslation();
    return (_jsxs(StyledWatchListWrapper, { children: [_jsx(StyledWatchListText, { children: t('header.watchlist') }), _jsx(StyledWatchListImg, { src: WatchListSave, alt: "Save Icon" })] }));
};
