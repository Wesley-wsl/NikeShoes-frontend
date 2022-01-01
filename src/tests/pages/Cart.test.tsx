import { screen, fireEvent, render } from "@testing-library/react";
import Router from "next/router";
import { mocked } from "ts-jest/utils";

import Cart from "../../pages/cart";

jest.mock("next/router");

const mockedRouter = mocked(Router);

describe("Cart Page", () => {
    it("should be able back to store page", () => {
        render(
            <Cart
                products={[
                    {
                        product_image:
                            "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-vapormax-flyknit-3-masculino-AJ6900-002-1.png",
                        _id: "id",
                        category: "Man",
                        name: "NikeShoe",
                        description: "description fake",
                        price: 100,
                        quantity: 1,
                    },
                ]}
            />,
        );

        const backToStoreNode = screen.getByTestId("backToStore");

        expect(backToStoreNode).toBeInTheDocument();

        fireEvent.click(backToStoreNode);

        expect(mockedRouter.push).toBeCalled();
    });

    it("should be able go to checkout", () => {
        render(
            <Cart
                products={[
                    {
                        product_image:
                            "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-vapormax-flyknit-3-masculino-AJ6900-002-1.png",
                        _id: "id",
                        category: "Man",
                        name: "NikeShoe",
                        description: "description fake",
                        price: 100,
                        quantity: 1,
                    },
                ]}
            />,
        );

        const checkout = screen.getByTestId("checkout");

        expect(checkout).toBeInTheDocument();

        fireEvent.click(checkout);

        expect(mockedRouter.push).toBeCalled();
    });
});
