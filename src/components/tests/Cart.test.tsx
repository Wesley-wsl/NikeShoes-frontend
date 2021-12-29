import { render, screen, fireEvent } from "@testing-library/react";
import Router from "next/router";
import { mocked } from "ts-jest/utils";

import Cart from "../../components/Cart";

jest.mock("next/router");

const mockedRouter = mocked(Router);

describe("Cart Component", () => {
    it("Should render Cart Component with your cart quantity", () => {
        render(<Cart cartQuantity={0} />);

        const CartQuantity = screen.getByText("0");
        expect(CartQuantity).toBeInTheDocument();
    });

    it("Should go to Cart page", () => {
        render(<Cart cartQuantity={0} />);

        fireEvent.click(screen.getByText("0"));

        expect(mockedRouter.push).toBeCalled();
    });
});
