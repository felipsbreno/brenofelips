import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 1rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
  margin-bottom: 1rem;
`
