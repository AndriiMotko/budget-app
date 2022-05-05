import PropTypes from "prop-types";
import Transaction from "../Transaction";
import { Wrapper } from "./styles";

const Transactions = ({ transactions, onDelete, onStarClick }) => {
	return (
		<Wrapper>
			{transactions.map((transaction) => (
				<Transaction
					transaction={transaction}
					key={transaction.id}
					onDelete={onDelete}
					onStarClick={onStarClick}
				/>
			))}
		</Wrapper>
	);
};

Transactions.defaultProps = {
	transactions: [],
};

Transactions.propTypes = {
	transactions: PropTypes.array,
};

export default Transactions;
