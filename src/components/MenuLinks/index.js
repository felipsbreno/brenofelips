import React from "react"

import links from "./content"
import Profile from "../Profile"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      <S.MenuLinksLink>
        <Profile />
      </S.MenuLinksLink>

      {links.map((link, i) => (
        <S.MenuLinksItem key={i} id={i}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
