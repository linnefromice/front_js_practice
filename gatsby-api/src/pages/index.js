import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
    <div>
      <Link to="/page-qiita/">Go to Qiita page</Link>
    </div>
    <div>
      <Link to="/page-nytimes/">Go to New York Times page</Link>
    </div>
    <div>
      <Link to="/page-marvel/">Go to Marvel page</Link>
    </div>
  </Layout>
)

export default IndexPage
