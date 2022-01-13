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
            <h2>PBR&amp;B XOXO mlkshk, listicle actually.</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi, biodiesel chia.
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

// Using the Layout component as a wrapper to render page content as children (prop) within the Layout component, with Navbar above and Footer below
// Using the gatsby image plugin to render the StaticImage component with image props
// Exporting a GraphQL query that is asking for a list of exercises, being filtered by the "featured" field type with a boolean status of "true".
// Passing in and destructuring the query prop and filtering down into the exercises object
// Importing the ExercisesList component, then passing the exercises object as a prop to ExercisesList
// Passing in SEO component to render metadata to the page