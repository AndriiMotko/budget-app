import { Wrapper } from "./styles";

import Balance from "../Balance";
import Transactions from "../Transactions/index";
import ChangeBalance from "../ChangeBalance";
import ErrorBoundary from "../ErrorBoundary";

import { useData } from "../../hooks";
import { STATUSES } from "../../constants";

const Home = () => {
	const {
		transactions,
		status,
		balance,
		pushTransaction,
		onDelete,
		onStarClick,
	} = useData();

	const onChange = (transaction) => {
		pushTransaction(transaction);
	};

	return (
		<ErrorBoundary>
			<Wrapper>
				<Balance balance={balance} />
				<ChangeBalance onChange={onChange} />
				<hr />

				{status === STATUSES.PENDING ? <div>Loading...</div> : null}

				{status === STATUSES.SUCCESS ? (
					<Transactions
						transactions={transactions}
						onDelete={onDelete}
						onStarClick={onStarClick}
					/>
				) : null}
			</Wrapper>
		</ErrorBoundary>
	);
};

export default Home;
