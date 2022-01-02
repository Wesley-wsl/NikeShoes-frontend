import { render, screen } from "@testing-library/react";

import SignUp from "../../pages/register";

describe("Home Page", () => {
    it("should render Register component", () => {
        render(<SignUp />);

        const register = screen.getByText("Register");

        expect(register).toBeInTheDocument();
    });
});
