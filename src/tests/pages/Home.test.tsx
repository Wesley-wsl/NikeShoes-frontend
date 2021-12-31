import { render, screen } from "@testing-library/react";

import Home from "../../pages";

describe("Home Page", () => {
    it("should render Login component", () => {
        render(<Home />);

        const login = screen.getByText("Login");

        expect(login).toBeInTheDocument();
    });
});
