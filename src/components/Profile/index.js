import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            description
            position
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, position },
      },
    }) => (
      <div className="container">
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )}
  />
)

export default Profile
