import React from "react";
import { shallow } from "enzyme";
import Transaction from ".";

describe("Transaction component", () => {
	let sut;
	let props;

	beforeEach(() => {
		props = {
			transaction: {
				date: "01.01.2020",
				value: 23,
				comment: "test",
			},
		};
		sut = shallow(<Transaction {...props} />);
	});

	it("should show transaction", () => {
		expect(sut).toMatchSnapshot();
	});

	it("should show 2 zeros after ammount", () => {
		expect(sut.find("Value").text()).toBe("23.00");
	});
});
