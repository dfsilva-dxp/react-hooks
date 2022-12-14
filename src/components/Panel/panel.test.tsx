import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Panel from ".";

describe("<Panel/>", () => {
  it("should render currectly", () => {
    renderWithTheme(
      <Panel>
        <span>Item</span>
      </Panel>
    );

    const body = screen.getByText(/item/i).parentElement;
    const wrap = body?.parentElement;

    expect(wrap).toHaveStyle({
      width: "100%",
      height: "calc(100vh - 4rem)",
      "background-color": "#202024",
      "border-radius": "0.25rem"
    });

    expect(body).toHaveStyle({
      "padding-top": "0",
      display: "grid",
      "grid-template-columns": "repeat(auto-fit,minmax(18.875rem,1fr))"
    });
  });

  it("should render title when passed", () => {
    const { container } = renderWithTheme(
      <Panel title="React Hooks">
        <span>Item</span>
      </Panel>
    );

    const heading = screen.getByRole("heading", { name: /react hooks/i });
    const body = screen.getByText(/item/i).parentElement;

    expect(heading).toBeInTheDocument();
    expect(heading.parentElement).toHaveStyle({
      "padding-bottom": "1rem",
      "border-bottom": "1px solid #121214"
    });

    expect(body).toHaveStyle({
      "padding-top": "1rem"
    });

    expect(container).toMatchSnapshot();
  });
});
