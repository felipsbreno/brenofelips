import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    height: 3.12rem;
    margin: auto;
    width: 3.12rem;
    bottom: 0.3rem;

    ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
    bottom: 0
  `}
  }
`
