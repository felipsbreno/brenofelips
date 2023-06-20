import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/my.png"
        alt="Minha foto para você ver quem eu sou"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
