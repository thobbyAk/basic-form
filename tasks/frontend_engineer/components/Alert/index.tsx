import React from "react";
import AlertComponent from "./AlertStructure";
import { useAppStateSelector } from "@/store/hooks";

const Alert = () => {
	const { message, showAlert } = useAppStateSelector(
		(state) => state.alertState
	);

	const componentProps = {
		message,
	};

	return (
		<React.Fragment>
			{showAlert && <AlertComponent {...componentProps} />}
		</React.Fragment>
	);
};

export default Alert;
