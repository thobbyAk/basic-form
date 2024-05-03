import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from ".";
import { Provider } from "react-redux";
import store from "@/store";
import { setMessage, alertSlice, AlertState } from "../../reducer/alertReducer";

const previousState: AlertState = {
	message: "",
	showAlert: false,
};

describe("Form Component", () => {
	test("it should match the snapshot and render", async () => {
		const { container } = render(
			<Provider store={store}>
				<Form />
			</Provider>
		);
		expect(container).toMatchSnapshot();
		expect(container).toBeInTheDocument();
	});
	test("submits the form with valid input", async () => {
		const { getByPlaceholderText, getByLabelText, getByText } = render(
			<Provider store={store}>
				<Form />
			</Provider>
		);

		const emailInput = getByPlaceholderText("Email address");
		fireEvent.change(emailInput, { target: { value: "testemail@yahoo.com" } });

		const categoryInput = getByText("Select category");
		fireEvent.change(categoryInput, { target: { value: "Shoes" } });

		const agreeCheckbox = getByLabelText("I agree to the terms and conditions");
		fireEvent.click(agreeCheckbox);

		const submitButton = getByText("Submit");
		fireEvent.click(submitButton);

		await waitFor(() => {
			const payload: AlertState = {
				message: "Form submitted successfully",
				showAlert: true,
			};
			expect(alertSlice.reducer(previousState, setMessage(payload))).toEqual(
				payload
			);
		});
	});
	test("the form should not submit if email or checkbox is invalid", async () => {
		const payload: AlertState = {
			message: "",
			showAlert: false,
		};
		const { getByPlaceholderText, getByLabelText, getByText } = render(
			<Provider store={store}>
				<Form />
			</Provider>
		);

		const emailInput = getByPlaceholderText("Email address");
		fireEvent.change(emailInput, { target: { value: "testemail@yahoo.co" } });

		const categoryInput = getByText("Select category");
		fireEvent.change(categoryInput, { target: { value: "Shoes" } });

		const submitButton = getByText("Submit");
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(alertSlice.reducer(previousState, setMessage(payload))).toEqual(
				payload
			);
		});
		const agreeCheckbox = getByLabelText("I agree to the terms and conditions");
		fireEvent.click(agreeCheckbox);
		fireEvent.change(emailInput, { target: { value: "email.com" } });
		fireEvent.click(submitButton);
		await waitFor(() => {
			expect(alertSlice.reducer(previousState, setMessage(payload))).toEqual(
				payload
			);
		});
	});
});
