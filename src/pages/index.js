import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllExercises from "../components/AllExercises"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="Fitness image"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Fun Fitness</h1>
              <h4>Making fitness... Fun!</h4>
            </div>
          </div>
        </header>
        <AllExercises />
      </main>
    </Layout>
  )
}
