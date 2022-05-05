import styled from "styled-components";

export const Wrapper = styled.div`
	background: ${({ value }) => (value < 0 ? "#FFB4B4" : "#CEE5D0")};
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	padding: 5px;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
Wrapper.displayName = "TransactionWrapper";

export const TransactionDate = styled.div`
	flex: 1 0;
`;
TransactionDate.displayName = "TransactionDate";

export const Value = styled.div`
	flex: 1 0;
`;
Value.displayName = "Value";

export const Comment = styled.div`
	flex: 2 0;
`;
Comment.displayName = "Comment";

export const Icon = styled.div`
	img {
		width: 20px;
		margin-left: 6px;
		margin-right: 6px;
	}
`;
Icon.displayName = "Icon";
