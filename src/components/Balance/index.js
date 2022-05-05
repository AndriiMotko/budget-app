const Balance = ({ balance }) => {
	return (
		<div style={{ fontSize: "18px" }}>
			Поточний баланс: {balance.toFixed(2)}
		</div>
	);
};

export default Balance;
