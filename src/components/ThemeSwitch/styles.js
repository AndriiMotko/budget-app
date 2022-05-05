import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 30px;

	img {
		width: 16px;
		height: 16px;
	}
`;
Wrapper.displayName = "Wrapper";

export const ThemeSwitcherSelect = styled.select`
	background-color: ${(props) => props.theme.menu_background};
	color: ${(props) => props.theme.linkColor};
	border: none;
	appearance: button;
	font-family: inherit;
	font-size: 16px;
	outline: none;
`;
ThemeSwitcherSelect.displayName = "ThemeSwitcherSelect";
