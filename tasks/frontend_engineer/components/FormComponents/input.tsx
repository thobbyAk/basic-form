import React, { HTMLProps, forwardRef, useState } from "react";
import { InputForm } from "../Form/FormStyle";

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
	({ ...props }, ref) => {
		const [email, setEmail] = useState("");
		return (
			<InputForm
				value={email}
				onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
				{...props}
				ref={ref}
			/>
		);
	}
);

export default Input;
