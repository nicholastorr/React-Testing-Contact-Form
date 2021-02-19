// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import { render } from 'react-dom';
import App from "./App"

test("renders App without the errors", () => {
    render(<App />)

    const greeting = screen.getByText(/error/i);

  // Assert
  expect(greeting).toBeInTheDocument();


});
