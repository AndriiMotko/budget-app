import { useState } from "react";
import { Wrapper } from "../Statistics/styles";

const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);

const List = ({ list }) => {
	const [filter, setFilter] = useState("");

	const filteredList = list.filter((item) => item.includes(filter));

	return (
		<>
			<input tupe="text" onChange={(e) => setFilter(e.target.value)} />
			<ul>
				{filteredList.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
};

const Clicker = () => {
	const [n, setN] = useState(0);

	return (
		<>
			<p>Clicked {n} times.</p>
			<button onClick={() => setN(n + 1)}>Click me</button>
		</>
	);
};

const Statistics = () => {
	return (
		<Wrapper>
			<List list={list} />
			<Clicker />
		</Wrapper>
	);
};

export default Statistics;
