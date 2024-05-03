import React, { ButtonHTMLAttributes, HTMLProps, forwardRef } from "react";
import { ButtonContainer } from "../Form/FormStyle";

const Button = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
	return (
		<ButtonContainer
			ref={ref}
			onClick={props.onClick}
			{...props}
			type={props.type}
		>
			{props.children}
		</ButtonContainer>
	);
});

export default Button;
