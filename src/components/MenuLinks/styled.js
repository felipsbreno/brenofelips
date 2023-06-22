import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: flex;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    width: 100%;
    display: flex;
    align-items: center;

    li {
      padding-left: 1rem
    }

  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--highlight);
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`
