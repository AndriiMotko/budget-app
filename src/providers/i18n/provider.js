import React, { useContext } from "react";
import { AppContext } from "../context";
import { IntlProvider } from "react-intl";
import flatten from "flat";

import messages from "./messages";
import { LOCALES } from "./constants";

const IntlAppProvider = ({ children }) => {
	const { state } = useContext(AppContext);
	return (
		<IntlProvider
			locale={state.locale}
			defaultLocale={LOCALES.ENGLISH}
			messages={flatten(messages[state.locale])}
		>
			{children}
		</IntlProvider>
	);
};

export default IntlAppProvider;
