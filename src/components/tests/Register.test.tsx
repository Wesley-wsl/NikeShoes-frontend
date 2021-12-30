import { fireEvent, render, screen } from "@testing-library/react";

import Register from "../Register";

jest.mock("next/router");

describe("Login component", () => {
    it("should have logo NikeShoes", () => {
        render(<Register />);

        expect(screen.getByText("NikeShoes")).toBeInTheDocument();
    });

    it("should have register button", () => {
        render(<Register />);

        const btnNode = screen.getByTestId("form-btn");

        expect(btnNode).toBeInTheDocument();
    });

    it("should be able edit input", () => {
        render(<Register />);

        const firstNameField = screen.getByTestId(
            "form-first_name",
        ) as HTMLInputElement;
        const lastNameField = screen.getByTestId(
            "form-last_name",
        ) as HTMLInputElement;
        const emailField = screen.getByTestId("form-email") as HTMLInputElement;
        const passwordField = screen.getByTestId(
            "form-password",
        ) as HTMLInputElement;

        fireEvent.change(firstNameField, {
            target: { value: "Nome Aleatório" },
        });
        fireEvent.change(lastNameField, {
            target: { value: "Sobrenome Aleatório" },
        });
        fireEvent.change(emailField, {
            target: { value: "emailrandom@gmail.com" },
        });
        fireEvent.change(passwordField, { target: { value: "1234" } });

        expect(firstNameField.value).toEqual("Nome Aleatório");
        expect(lastNameField.value).toEqual("Sobrenome Aleatório");
        expect(emailField.value).toEqual("emailrandom@gmail.com");
        expect(passwordField.value).toEqual("1234");
    });
});
