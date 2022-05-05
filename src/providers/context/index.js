import { createContext } from "react";
import { useReducer } from "react";
import defaultContext from "./defaultContext";

const AppContext = createContext();
console.log(`AppContext`, AppContext);

const reducer = (state, action) => {
	switch (action.type) {
		case "changeCarrency": {
			return {
				...state,
				currency: action.currency,
			};
		}

		case "setTheme": {
			return {
				...state,
				themeName: action.themeName,
			};
		}

		case "setLocale": {
			return {
				...state,
				locale: action.locale,
			};
		}

		case "reset": {
			return defaultContext;
		}

		default: {
			throw new Error("No action");
		}
	}
};

const AppContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, defaultContext);
	const value = { state, dispatch };

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
