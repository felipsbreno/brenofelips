import React from "react"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <MenuLinks />
    <SocialLinks />
  </S.SidebarWrapper>
)

export default Sidebar
