import { NavLink } from "react-router-dom";
import { Nav, Wrapper } from "./styles";
import ThemeSwitch from "../ThemeSwitch";
import { FormattedMessage } from "react-intl";

const Header = () => {
	return (
		<Wrapper>
			<Nav>
				<ul>
					<li>
						<NavLink to="/">
							<FormattedMessage id="menu.home" />
						</NavLink>
					</li>
					<li>
						<NavLink to="/statistics">
							<FormattedMessage id="menu.statistics" />
						</NavLink>
					</li>
					<li>
						<NavLink to="/settings">
							<FormattedMessage id="menu.settings" />
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">
							<FormattedMessage id="menu.about" />
						</NavLink>
					</li>
				</ul>
			</Nav>
			<ThemeSwitch />
		</Wrapper>
	);
};

export default Header;
