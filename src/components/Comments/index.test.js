import React from "react"
import { render, screen } from "@testing-library/react"
import Comments from "."

describe("Comments", () => {
  it("should render equals snapshot", () => {
    const { container } = render(<Comments />)
    expect(container).toMatchSnapshot()
  })

  it("should be component Comments", () => {
    render(<Comments />)

    const getElementById = screen.getByTestId("comments")
    expect(getElementById).toBeInTheDocument()
  })

  it("should be render text", () => {
    render(<Comments />)

    const text = screen.getByText("Comentários")
    expect(text).toBeInTheDocument()
  })
})
