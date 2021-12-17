import React from "react"
import Layout from "../components/Layout"
import AllExercises from "../components/AllExercises"
import SEO from "../components/SEO"

const exercises = () => {
  return (
    <main className="page">
      <Layout>
        <SEO title="Exercises" />
        <main className="page">
          <AllExercises />
        </main>
      </Layout>
    </main>
  )
}

export default exercises
