import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import { StaticImage } from "gatsby-plugin-image"


import MenuBar from "../Menubar"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"
import Avatar from "../Avatar";

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.Header>
        <S.Logo>
          <StaticImage
            src="../../images/img_1.png"
            alt="Titulo do site"
            placeholder="blurred"
          />
        </S.Logo>
        <Avatar />
      </S.Header>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
