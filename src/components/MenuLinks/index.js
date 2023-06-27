import React from "react"

import Profile from "../Profile"
import * as S from "./styled"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      <S.MenuLinksLink>
        <Profile />
      </S.MenuLinksLink>
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
