import React from "react"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to your Maltem Events Website.</h1>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Card />
    </div>
  </Layout>
)

export default IndexPage
