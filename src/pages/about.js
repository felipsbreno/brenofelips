import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About Page</h1>

    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
