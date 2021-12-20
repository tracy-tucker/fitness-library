import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import ExercisesList from "../components/ExercisesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulExercise: { nodes: exercises },
  },
}) => {
  return (
    <Layout>
      <SEO title="About Us" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>PBR&B XOXO mlkshk, listicle actually.</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Person leaping"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-exercises">
          <h5>Check out these moves!</h5>
          <ExercisesList exercises={exercises} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulExercise(
      sort: { order: ASC, fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        sets
        repetitions
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
