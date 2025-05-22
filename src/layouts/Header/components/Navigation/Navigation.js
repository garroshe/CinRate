import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledNav, StyledNavLink } from "./styled";
import { useTranslation } from "react-i18next";
export const Navigation = () => {
    const { t } = useTranslation();
    return (_jsxs(StyledNav, { children: [_jsx(StyledNavLink, { to: "/movie", children: t('header.nav.movies') }), _jsx(StyledNavLink, { to: "/series", children: t('header.nav.series') }), _jsx(StyledNavLink, { to: "/cartoons", children: t('header.nav.cartoons') }), _jsx(StyledNavLink, { to: "/people", children: t('header.nav.people') }), _jsx(StyledNavLink, { to: "/tops", children: t('header.nav.top') })] }));
};
