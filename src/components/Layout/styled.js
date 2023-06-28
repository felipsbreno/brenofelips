import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  transition: background, color 0.5s;
  width: 100%;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: var(--mediumBackground);
`

export const Logo = styled.div`
  .gatsby-image-wrapper {
    width: 14rem;
  }
`
