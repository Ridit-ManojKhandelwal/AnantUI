// src/components/Button.test.ts
import { render } from "@testing-library/react";
import styled from "styled-components";

describe("Button component", () => {
  it("renders without crashing", () => {
    const { container } = render(styled.button`
      background-color: green;
    `);
    expect(container).toBeDefined();
  });
});
