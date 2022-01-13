import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ExercisesList from "../components/ExercisesList"
import SEO from "../components/SEO"

// Form is a FormSpree.io contact form
const Contact = ({ data }) => {
  const exercises = data.allContentfulExercise.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get in touch!</h3>
            <p>
              Waistcoat asymmetrical knausgaard tacos wolf pop-up echo park
              bitters pinterest.
            </p>
            <p>
              Biodiesel lo-fi cred tacos godard meh farm-to-table flannel four
              dollar toast lyft air plant hexagon 8-bit chartreuse.
            </p>
            <p>
              Street art bespoke edison bulb blog, authentic craft beer
              typewriter crucifix kinfolk actually vape lumbersexual. Poutine
              kinfolk microdosing direct trade shabby chic. Coloring book master
              cleanse ramps, kogi tacos celiac deep v farm-to-table. Pickled
              XOXO godard shaman.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xdoboyag"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact

// Using the Layout component as a wrapper to render page content as children (prop) within the Layout component, with Navbar above and Footer below
// Exporting a GraphQL query that is asking for a list of exercises, being filtered by the "featured" field type with a boolean status of "true".
// Passing in and destructuring the query prop and filtering down into the exercises object
// Importing the ExercisesList component, then passing the exercises object as a prop to ExercisesList
// Passing in SEO component to render metadata to the page