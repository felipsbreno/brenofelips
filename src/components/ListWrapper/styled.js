import styled from "styled-components"

export const ListItemBuild = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem;
  }
`

export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`
