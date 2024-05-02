import React, { useRef, useState } from "react";
import Input from "./input";
import Button from "./button";
import CheckBoxInput from "./checkBoxInput";
import SelectInput from "./selectInput";
import { CheckboxField, FormContainer } from "./FormStyle";
import { useAppDispatch } from "@/store/hooks";
import { AlertState, setMessage } from "@/reducer/alertReducer";

const Form = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const checkboxRef = useRef<HTMLInputElement>(null);
	const categoryRef = useRef<HTMLSelectElement>(null);
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const payload: AlertState = {
			message: "Form submitted successfully",
			showAlert: true,
		};
		dispatch(setMessage(payload));
		clearAlertState();
		resetForm();
	};

	const clearAlertState = () => {
		const payload: AlertState = {
			message: "",
			showAlert: false,
		};
		setTimeout(() => {
			dispatch(setMessage(payload));
		}, 5000);
	};

	function resetForm() {
		if (emailRef.current) emailRef.current.value = "";
		if (checkboxRef.current) checkboxRef.current.checked = false;
		if (categoryRef.current) categoryRef.current.value = "";
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<Input ref={emailRef} type="email" placeholder="Email address" required />
			<SelectInput ref={categoryRef} />
			<CheckboxField>
				<CheckBoxInput id="terms" ref={checkboxRef} type="checkbox" required />
				<label htmlFor="terms">I agree to the terms and conditions</label>
			</CheckboxField>

			<Button type="submit">Submit</Button>
		</FormContainer>
	);
};

export default Form;
