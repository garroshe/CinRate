import {StyledWatchListImg, StyledWatchListText, StyledWatchListWrapper} from "./stylde";
import WatchListSave from '../../../../assets/img/WatchListSave.png';
import {useTranslation} from "react-i18next";
import {MyButton} from "../../../../components/ui/DropDownUi/DropDownUi";

export const WatchList = () => {
    const {t} = useTranslation();
    return (
        <StyledWatchListWrapper>
            <StyledWatchListText>{t('header.watchlist')}</StyledWatchListText>
            <StyledWatchListImg src={WatchListSave} alt="Save Icon" />
            <div style={{ border: '2px solid red' }}>
                <MyButton/>
            </div>
        </StyledWatchListWrapper>
    )
}