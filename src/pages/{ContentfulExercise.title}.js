import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"

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
      <main className="page">
        <div className="exercise-page">
          {/* hero */}
          <GatsbyImage image={pathToImage} alt={title} className="about-img" />
          <article className="exercise-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="exercise-icons">//</div>
            {/* tags */}
            <p className="exercise-tags">
              Tags :
              {tags.map((tag, index) => {
                return (
                  <Link to={`/${tag}`} key={index}>
                    {tag}
                  </Link>
                )
              })}
            </p>
          </article>
          <section className="exercise-hero"></section>
          {/* rest of content */}
          <section className="exercise-content"></section>
        </div>
      </main>
    </Layout>
  )
}

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
