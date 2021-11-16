import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>

    <Link to="/about">About</Link>
  </Layout>
)

export default IndexPage
