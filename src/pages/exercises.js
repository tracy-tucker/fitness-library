import React from "react"
import Layout from "../components/Layout"
import AllExercises from "../components/AllExercises"

const exercises = () => {
  return (
    <main className="page">
      <Layout>
        <main className="page">
          <AllExercises />
        </main>
      </Layout>
    </main>
  )
}

export default exercises
