import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory } from "react-icons/bs"
import { BiDumbbell } from "react-icons/bi"
import { AiOutlineNumber } from "react-icons/ai"
import slugify from "slugify"
import SEO from "../components/SEO"

const ExerciseTemplate = ({ data }) => {
  const {
    title,
    executionTime,
    content,
    repetitions,
    sets,
    description: { description },
    image,
  } = data.contentfulExercise
  const pathToImage = getImage(image)
  const { tags, instructions, setup, equipment } = content
  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="exercise-page">
          {/* hero */}
          <section className="exercise-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title} 
              className="about-img"
            />
            <article className="exercise-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="exercise-icons">
                <article>
                  <AiOutlineNumber />
                  <h5>repetitions</h5>
                  <p>{repetitions}</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>execution time</h5>
                  <p>{executionTime}</p>
                </article>
                <article>
                  <BiDumbbell />
                  <h5>sets</h5>
                  <p>{sets}</p>
                </article>
              </div>
              {/* tags */}
              <p className="exercise-tags">
                Tags :
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest of content */}
          <section className="exercise-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>setup</h4>
                {setup.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {equipment.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

// Dynamic query
export const query = graphql`
  query getSingleExercise($title: String) {
    contentfulExercise(title: { eq: $title }) {
      title
      executionTime
      content {
        setup
        instructions
        tags
        equipment
      }
      description {
        description
      }
      repetitions
      sets
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default ExerciseTemplate

// Gatsby dynamically creates pages based on the number of exercise entries and respective content in the DB (Contentful) - slug file name
// Running a GraphQL query asking for single exercise info, specific to title
// Destructuring the result and saving as the data variable
// Destructuring the content property within data to access additional properties
// Using GatsbyImage to render dynamic images to the component, while utilizing the getImage helper function to avoid image render errors

// Using the Layout component as a wrapper to render page content as children (prop) within the Layout component, with Navbar above and Footer below

// Drilling down into the query result and creating a variable for exercises
// Importing the ExercisesList component and passing in the exercises as a prop to this component

// Using slugify to create the correct page path

// Passing in SEO component to render metadata to the page