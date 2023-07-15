import React from "react"
import { screen, render } from "@testing-library/react"
import Avatar from "."

describe("Avatar", () => {
  it("should be equals snapshot", () => {
    const { container } = render(<Avatar />)
    expect(container).toMatchSnapshot()
  })

  it("should be render a component Avatar", () => {
    render(<Avatar />)

    const getElementById = screen.getByTestId("avatar")
    expect(getElementById).toBeInTheDocument()
  })
})
