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
              Palo santo cardigan post-ironic austin pabst, asymmetrical franzen
              hot chicken la croix photo booth. Deep v unicorn cray, tattooed
              celiac put a bird on it 90's asymmetrical.
            </p>
            <p>
              Palo santo cardigan post-ironic austin pabst, asymmetrical franzen
              hot chicken la croix photo booth. Deep v unicorn cray, tattooed
              celiac put a bird on it 90's asymmetrical.
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
