import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 4rem;

  ${media.lessThan("large")`
    display: flex;
    align-items: center;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`
