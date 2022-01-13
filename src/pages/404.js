import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error

// Passing in SEO component to render metadata to the page
// Importing Layout component to wrap Navbar and Footer around page content