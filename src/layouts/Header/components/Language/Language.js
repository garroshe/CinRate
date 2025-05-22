import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledSelectLen } from "./styled";
import { useTranslation } from 'react-i18next';
export const Language = () => {
    const { i18n } = useTranslation();
    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    return (_jsxs(StyledSelectLen, { onChange: handleChange, value: i18n.language, children: [_jsx("option", { value: "en", children: "English" }), _jsx("option", { value: "uk", children: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" })] }));
};
