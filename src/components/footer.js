import "./layout.css"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "maltem-griffe.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

const Footer = () => (
  <footer
    style={{
      fontSize: `0.8em`,
    }}
  >
    <div style={{ maxWidth: `300px` }}>
      <Image />
    </div>
    © {new Date().getFullYear()}, Built with
    {` `}
    <span>Gatsby ❤</span>
  </footer>
)

export default Footer
