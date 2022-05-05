import React, { useContext } from "react";
import { AppContext } from "../../providers/context";
import { THEMES } from "../../providers/theme/themeList";
import { ThemeSwitcherSelect, Wrapper } from "./styles";
import themeIcon from "../../assets/theme.svg";
import { saveToStorage } from "../../utils/sessionStorage";

const ThemeSwitch = () => {
	const { state, dispatch } = useContext(AppContext);

	const setTheme = (themeName) => {
		dispatch({
			type: "setTheme",
			themeName,
		});

		saveToStorage("themeName", themeName);
	};

	return (
		<Wrapper>
			<img src={themeIcon} alt="" />
			<ThemeSwitcherSelect onChange={(e) => setTheme(e.target.value)}>
				<option value={THEMES.BASIC}>Basic</option>
				<option value={THEMES.LIGHT}>Light</option>
				<option value={THEMES.DARK}>Dark</option>
			</ThemeSwitcherSelect>
		</Wrapper>
	);
};

export default ThemeSwitch;
