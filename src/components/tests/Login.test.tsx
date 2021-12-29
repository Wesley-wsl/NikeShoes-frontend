import { fireEvent, render, screen } from "@testing-library/react";

import Login from "../Login";

jest.mock("next/router");

describe("Login component", () => {
    it("should have logo NikeShoes", () => {
        render(<Login />);

        expect(screen.getByText("NikeShoes")).toBeInTheDocument();
    });

    it("should have login button", () => {
        render(<Login />);

        const btnNode = screen.getByTestId("form-btn");

        expect(btnNode).toBeInTheDocument();
    });

    it("should be able edit input", () => {
        render(<Login />);

        const emailField = screen.getByTestId("form-email") as HTMLInputElement;
        const passwordField = screen.getByTestId(
            "form-password",
        ) as HTMLInputElement;

        fireEvent.change(emailField, {
            target: { value: "emailrandom@gmail.com" },
        });
        fireEvent.change(passwordField, { target: { value: "1234" } });

        expect(emailField.value).toEqual("emailrandom@gmail.com");
        expect(passwordField.value).toEqual("1234");
    });
});
