/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import App from "./app";
import { AppContext } from "../../providers/context";
import { getTheme } from "../../providers/theme/getTheme";
import { IntlAppProvider } from "../../providers/i18n";

export default () => {
	const { state } = useContext(AppContext);

	return (
		<IntlAppProvider>
			<ThemeProvider theme={getTheme(state.themeName)}>
				<App />
			</ThemeProvider>
		</IntlAppProvider>
	);
};
