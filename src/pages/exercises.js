import React from "react"
import Layout from "../components/Layout"
import AllExercises from "../components/AllExercises"

const exercises = () => {
  return (
    <main className="page">
      <Layout>
        <AllExercises />
      </Layout>
    </main>
  )
}

export default exercises
