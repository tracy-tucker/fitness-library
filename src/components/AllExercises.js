import React from "react"
import ExercisesList from "./ExercisesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulExercise(sort: { order: ASC, fields: title }) {
      nodes {
        id
        title
        sets
        repetitions
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllExercises = () => {
  const data = useStaticQuery(query)
  const exercises = data.allContentfulExercise.nodes
  // console.log(exercises)
  return (
    <section className="exercises-container">
      <TagsList exercises={exercises} />
      <ExercisesList exercises={exercises} />
    </section>
  )
}

export default AllExercises
