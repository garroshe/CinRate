import {StyledNav, StyledNavLink} from "./styled.tsx";
import {useTranslation} from "react-i18next";

export const Navigation = () => {
    const {t} = useTranslation();
    return (
        <StyledNav>
            <StyledNavLink to="/movie">{t('header.nav.movies')}</StyledNavLink>
            <StyledNavLink to="/series">{t('header.nav.series')}</StyledNavLink>
            <StyledNavLink to="/cartons">{t('header.nav.cartoons')}</StyledNavLink>
            <StyledNavLink to="/people">{t('header.nav.people')}</StyledNavLink>
            <StyledNavLink to="/tops">{t('header.nav.top')}</StyledNavLink>
        </StyledNav>
    )
}