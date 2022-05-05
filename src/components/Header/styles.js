import styled from "styled-components";

export const Nav = styled.nav`
	ul {
		display: flex;
		align-items: center;
		list-style: none;
		padding: 10px 15px;
		margin: 0;

		@media (max-width: 550px) {
			flex-flow: column;
		}

		li {
			margin-left: 20px;

			a {
				text-decoration: none;
				color: ${(props) => props.theme.linkColor};
				font-size: 16px;
				font-weight: 600;
			}
			.active {
				color: ${(props) => props.theme.activeLinkColor};
				text-decoration: underline;
				text-underline-position: under;
			}
		}
	}
`;
Nav.displayName = "Navigation";

export const Wrapper = styled.div`
	border-radius: 10px;
	background-color: ${(props) => props.theme.menu_background};
	display: flex;
	margin-bottom: 20px;
	@media (max-width: 550px) {
		flex-flow: column;
	}
`;
Wrapper.displayName = "Wrapper";
