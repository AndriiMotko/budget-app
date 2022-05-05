import { useContext } from "react";
import { AppContext } from "../../providers/context";
import { useBooleanToggle } from "../../hooks";
import { LOCALES } from "../../providers/i18n";
import { Wrapper } from "./styles";
import { saveToStorage } from "../../utils/sessionStorage";

const Settings = () => {
	const { state, dispatch } = useContext(AppContext);
	const {
		status: isAdvancedSettingsShow,
		handleStatusChange: toogleAdvancedSettingsShow,
	} = useBooleanToggle();

	const onChangeCarrency = (e) => {
		const { value } = e.target;

		dispatch({
			type: "changeCarrency",
			currency: value,
		});

		saveToStorage("currency", value);
	};

	const onChangeLocale = (e) => {
		const { value } = e.target;

		dispatch({
			type: "setLocale",
			locale: value,
		});

		saveToStorage("locale", value);
	};

	return (
		<Wrapper>
			<h1>Налаштування</h1>

			<div>
				<form>
					<div>
						<label>
							Валюта
							<select
								name="currency"
								value={state.currency}
								onChange={onChangeCarrency}
							>
								<option value="UAH">Гривня</option>
								<option value="USD">Долар США</option>
								<option value="EUR">Євро</option>
							</select>
						</label>
					</div>

					<div>
						<label>
							Мова:
							<select
								name="locale"
								value={state.locale}
								onChange={onChangeLocale}
							>
								<option value={LOCALES.UKRAINIAN}>Українська</option>
								<option value={LOCALES.ENGLISH}>English</option>
							</select>
						</label>
					</div>
				</form>
			</div>
			<div>
				<button onClick={toogleAdvancedSettingsShow}>
					Розширені налаштування
				</button>
				{isAdvancedSettingsShow ? (
					<div>
						<h2>Розширені налаштування</h2>
						<p>....</p>
					</div>
				) : null}
			</div>
		</Wrapper>
	);
};

export default Settings;
