import React from "react"
import Layout from "../components/Layout"
import AllExercises from "../components/AllExercises"
import SEO from "../components/SEO"

const exercises = () => {
  return (
    <Layout>
      <SEO title="Exercises" />
      <main className="page">
        <AllExercises />
      </main>
    </Layout>
  )
}

export default exercises

// Using the Layout component as a wrapper to render page content as children (prop) within the Layout component, with Navbar above and Footer below
// Importing the AllExercises component to display a list of all exercises available in the database
// Passing in SEO component to render metadata to the page