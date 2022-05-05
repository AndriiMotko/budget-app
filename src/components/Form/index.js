import { useState } from "react";
import PropTypes from "prop-types";
import { Wrapper, Input, Row, Button, Comment } from "./styles";
import { FormattedMessage } from "react-intl";

const Form = (props) => {
	const [form, setForm] = useState({
		value: "",
		date: new Date().toISOString().substring(0, 10),
		comment: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();

		props.onChange(form);
		setForm({
			...form,
			value: "",
			comment: "",
		});

		props.onCloseForm();
	};

	const onChange = (e) => {
		const { value, name } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<Wrapper>
			<FormattedMessage id="hello" />
			<form onSubmit={onSubmit}>
				<Row>
					<Input
						name="value"
						type="number"
						placeholder="Сума"
						value={form.value}
						onChange={onChange}
					/>
					<Input
						type="date"
						name="date"
						value={form.date}
						onChange={onChange}
					/>
				</Row>
				<Row>
					<Comment
						name="comment"
						value={form.comment}
						placeholder="Коментар..."
						onChange={onChange}
					/>
					<Button>Зберегти</Button>
				</Row>
			</form>
		</Wrapper>
	);
};

Form.propTypes = {
	onChange: PropTypes.func,
};

export default Form;
