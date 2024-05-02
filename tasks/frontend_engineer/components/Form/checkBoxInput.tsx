import React, { HTMLProps, forwardRef, useState } from "react";

const CheckBoxInput = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
	({ ...props }, ref) => {
		const [agree, setAgree] = useState(false);
		return (
			<input
				checked={agree}
				onChange={(e) => setAgree((e.target as HTMLInputElement).checked)}
				{...props}
				ref={ref}
			/>
		);
	}
);

export default CheckBoxInput;
