import React from "react"
import { Home } from "@styled-icons/boxicons-solid/Home"
import { PersonInfo } from "@styled-icons/fluentui-system-filled/PersonInfo"

const links = [
  {
    label: <Home size={30} />,
    url: "/",
  },
  {
    label: <PersonInfo size={30} />,
    url: "/about",
  },
]

export default links
