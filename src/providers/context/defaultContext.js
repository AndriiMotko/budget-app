/* eslint-disable import/no-anonymous-default-export */
import { THEMES } from "../theme/themeList";
import { getFromStorage } from "../../utils/sessionStorage";
import { LOCALES } from "../i18n";

export default {
	currency: getFromStorage("currency") || "UAH",
	themeName: getFromStorage("themeName") || THEMES.BASIC,
	locale: getFromStorage("locale") || LOCALES.UKRAINIAN,
};
