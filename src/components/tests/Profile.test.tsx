import { screen, render, fireEvent } from "@testing-library/react";
import Router from "next/router";
import { mocked } from "ts-jest/utils";

import Profile from "../Profile";

jest.mock("next/router");

const mockedRouter = mocked(Router);

describe("Profile component", () => {
    it("should be able open logout option", () => {
        render(<Profile />);

        const iconToggle = screen.getByTestId("openLogout");
        fireEvent.click(iconToggle);

        const logout = screen.getByTestId("logout");
        expect(logout).toBeInTheDocument;
    });

    it("should be able logout", () => {
        render(<Profile />);
        const iconToggle = screen.getByTestId("openLogout");
        fireEvent.click(iconToggle);

        const logout = screen.getByTestId("logout");
        fireEvent.click(logout);

        expect(mockedRouter.push).toBeCalled();
    });
});
