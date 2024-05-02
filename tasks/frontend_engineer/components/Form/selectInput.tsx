import React, { SelectHTMLAttributes, forwardRef, useState } from "react";
import { InputSelect } from "./FormStyle";

const SelectInput = forwardRef<
	HTMLSelectElement,
	SelectHTMLAttributes<HTMLSelectElement>
>(({ ...props }, ref) => {
	const [category, setCategory] = useState("");
	return (
		<InputSelect
			ref={ref}
			value={category}
			onChange={(e) => setCategory((e.target as HTMLSelectElement).value)}
		>
			<option value="">Select category</option>
			<option value="Shoes">Shoes</option>
			<option value="Heels">Heels</option>
			<option value="Sandals">Sandals</option>
			<option value="Handbags">Handbags</option>
		</InputSelect>
	);
});

export default SelectInput;
