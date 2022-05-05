import React from "react";
import { Wrapper, GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { open } from "../../utils/indexdb";

import Home from "../Home/index";
import Statistics from "../Statistics/index";
import About from "../About/index";
import Header from "../Header";
import Settings from "../Settings";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		};
	}
	componentDidMount() {
		open()
			.then(() => {
				this.setState({
					loading: false,
				});
			})
			.catch(() => {
				console.log(`Помилка створення DB`);
			});
	}

	render() {
		if (this.state.loading) {
			return <div>Loading...</div>;
		}

		return (
			<Router>
				<Wrapper>
					<GlobalStyle />
					<Header />

					<Routes>
						<Route path="/about" element={<About />} />
						<Route path="/statistics" element={<Statistics />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</Wrapper>
			</Router>
		);
	}
}

export default App;
