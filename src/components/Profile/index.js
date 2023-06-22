import React from "react"
import getThemeColor from "../../utils/getThemeColor"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile
