import styled from "styled-components";

export const Wrapper = styled.div`
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.color};
	border-radius: 3px;
	padding: 15px;
	margin-bottom: 10px;
`;
Wrapper.displayName = "TransactionWrapper";

export const Input = styled.input`
	border-radius: 3px;
	padding: 0 5px;
	min-width: 160px;
	margin-bottom: 5px;
	margin-right: 10px;
	border: 1px solid #dbdbdb;
	height: 40px;
	outline: none;
	box-sizing: border-box;
`;
Input.displayName = "Input";

export const Row = styled.div`
	display: flex;
	align-items: center;
`;
Row.displayName = "Row";

export const Button = styled.button`
	border: 1px solid #dbdbdb;
	height: 40px;
	border-radius: 3px;
	padding: 0 21px;
	box-sizing: border-box;
	background-color: #a7a7a7;
	color: rgba(0, 0, 0, 0.87);
	font-size: 18px;
	outline: none;
	width: 160px;

	&:hover {
		cursor: pointer;
	}
`;
Button.displayName = "Button";

export const Comment = styled.textarea`
	height: 40px;
	line-height: 1.5;
	box-sizing: border-box;
	padding: 5px;
	border-radius: 3px;
	margin: 0 10px 0 0;
	width: 160px;
	border: 1px solid #dbdbdb;
	outline: none;
	resize: none;
`;
Comment.displayName = "Comment";
