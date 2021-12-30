import { fireEvent, render, screen } from "@testing-library/react";

import Products from "../Product";

describe("Product Component", () => {
    it("should render quantity product", () => {
        render(
            <Products
                product_image="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-vapormax-flyknit-3-masculino-AJ6900-002-1.png"
                name="productFic"
                price={100}
                _id="id"
                setTotal={() => true}
                total={100}
                quantity={1}
            />,
        );

        const quantity = screen.getByText("1");
        expect(quantity).toBeInTheDocument();
    });

    it("should increment quantity product", () => {
        render(
            <Products
                product_image="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-vapormax-flyknit-3-masculino-AJ6900-002-1.png"
                name="productFic"
                price={100}
                _id="id"
                setTotal={() => true}
                total={100}
                quantity={1}
            />,
        );

        const increment = screen.getByTestId("increment");

        fireEvent.click(increment);

        expect(screen.getByText("2")).toBeInTheDocument();
    });
    it("should decrement quantity product", () => {
        render(
            <Products
                product_image="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-vapormax-flyknit-3-masculino-AJ6900-002-1.png"
                name="productFic"
                price={100}
                _id="id"
                setTotal={() => true}
                total={100}
                quantity={2}
            />,
        );

        const decrement = screen.getByTestId("decrement");

        fireEvent.click(decrement);

        expect(screen.getByText("1")).toBeInTheDocument();
    });
});
