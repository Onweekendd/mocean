import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Chat from "../app/(chat)/page";

describe("Chat Page", () => {
  it("renders correctly", () => {
    render(<Chat />);
    expect(screen.getByText("選擇助手")).toBeDefined();
  });
});
