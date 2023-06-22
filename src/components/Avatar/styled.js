import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    height: 3.15rem;
    margin: auto;
    width: 3.15rem;

    ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
  }
`
