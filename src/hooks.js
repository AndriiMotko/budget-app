import { useState, useEffect, useCallback } from "react";
import { STATUSES } from "./constants";
import { getItems, addItem, deleteItem, updateItem } from "./utils/indexdb";

export const useBooleanToggle = () => {
	const [status, setStatus] = useState(false);

	const handleStatusChange = () => {
		setStatus((currentState) => !currentState);
	};

	return { status, handleStatusChange };
};

export const useData = () => {
	const [state, setState] = useState({
		transactions: [],
		balance: 0,
		error: "",
		status: STATUSES.IDLE,
	});

	useEffect(() => {
		setState((state) => ({
			...state,
			status: STATUSES.PENDING,
		}));

		getItems()
			.then((transactions) => {
				setState((state) => ({
					...state,
					transactions,
					status: STATUSES.SUCCESS,
					balance: transactions
						?.map((el) => el.value)
						.reduce((previousValue, currentValue) => {
							return previousValue + currentValue;
						}, 0),
				}));
			})
			.catch((e) => {
				setState((state) => ({
					...state,
					transactions: [],
					status: STATUSES.ERROR,
					error: e,
				}));
			});
	}, [setState]);

	const pushTransaction = useCallback(
		(data) => {
			const transaction = {
				...data,
				value: +data.value,
				id: Date.now(),
			};

			setState((state) => ({
				...state,
				transactions: [transaction, ...state.transactions],
				balance: state.balance + Number(data.value),
			}));

			addItem(transaction);
		},
		[setState]
	);

	const onDelete = useCallback(
		(id) => {
			setState((state) => ({
				...state,
				transactions: state.transactions.filter((item) => item.id !== id),
			}));

			deleteItem(id);
		},
		[setState]
	);

	const onStarClick = useCallback(
		(id) => {
			const item = state.transactions.find((i) => i.id === id);

			updateItem({
				...item,
				isStared: !item.isStared,
			}).then(() => {
				setState((state) => ({
					...state,
					transactions: state.transactions.map((item) =>
						item.id !== id
							? item
							: {
									...item,
									isStared: !item.isStared,
							  }
					),
				}));
			});
		},
		[setState, state]
	);

	return {
		...state,
		pushTransaction,
		onDelete,
		onStarClick,
	};
};
