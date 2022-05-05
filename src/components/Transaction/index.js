import PropTypes from "prop-types";
import { Wrapper, TransactionDate, Value, Comment, Icon } from "./styles";
import { useContext, useCallback } from "react";
import { AppContext } from "../../providers/context";
import emptyStarIcon from "../../assets/empty_star.svg";
import filedStarIcon from "../../assets/filed_star.svg";

const Transaction = ({
	transaction: { id, value, date, comment, isStared },
	onDelete,
	onStarClick,
}) => {
	const { state } = useContext(AppContext);

	const deleteItem = useCallback(() => {
		onDelete(id);
	}, [id]);

	return (
		<Wrapper className="transaction" value={value}>
			<Icon onClick={() => onStarClick(id)}>
				<img src={isStared ? filedStarIcon : emptyStarIcon} alt="rate" />
			</Icon>
			<TransactionDate>{date}</TransactionDate>
			<Value>
				{value.toFixed(2)}, {state.currency}
			</Value>
			<Comment>{comment}</Comment>
			<button onClick={deleteItem}>Delete</button>
		</Wrapper>
	);
};

Transaction.defaultProps = {
	transaction: {
		date: "",
		value: 0,
		comment: "",
	},
};

Transaction.propTypes = {
	transaction: PropTypes.shape({
		date: PropTypes.string,
		value: PropTypes.number,
		comment: PropTypes.string,
		isStared: PropTypes.bool,
	}),
	onDelete: PropTypes.func,
	onStarClick: PropTypes.func,
};

export default Transaction;
