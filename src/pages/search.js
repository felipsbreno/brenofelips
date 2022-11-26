import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <Seo title="Search" />
    <Search />

    <Link to="/">Home</Link>
  </Layout>
)

export default SearchPage
