import { render, screen } from "@testing-library/react";

import SizeSelector from "../SizeSelector";

describe("SizeSelector Component", () => {
    it("should render SizeSelector Component", () => {
        render(<SizeSelector />);

        expect(screen.getByText("Select Size (US)"));
    });
});
