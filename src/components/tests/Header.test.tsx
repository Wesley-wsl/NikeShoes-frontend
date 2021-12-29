import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("Header Component", () => {
    it("should have option men and women.", () => {
        render(
            <Header
                cartQuantity={0}
                setIsMan={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />,
        );

        expect(screen.getByText("Men")).toBeInTheDocument();
        expect(screen.getByText("Women")).toBeInTheDocument();
    });

    it("should render Cart component in Header", () => {
        render(
            <Header
                cartQuantity={0}
                setIsMan={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />,
        );

        expect(screen.getByText("0")).toBeInTheDocument();
    });
});
