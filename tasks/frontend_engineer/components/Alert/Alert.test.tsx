import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from ".";
import { Provider } from "react-redux";
import store from "@/store";

test("it should match the snapshot and render", async () => {
	const { container } = render(
		<Provider store={store}>
			<Alert />
		</Provider>
	);
	expect(container).toMatchSnapshot();
	expect(container).toBeInTheDocument();
});
