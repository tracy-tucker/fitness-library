import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//providing a default empty array to avoid errors if exercise missing
const ExercisesList = ({ exercises = [] }) => {
  return (
    <div className="exercises-list">
      {exercises.map(exercise => {
        // console.log(exercise)
        // destructuring
        const { id, title, image, repetitions, sets } = exercise
        return (
          <Link key={id} to={`/${title}`} className="exercise">
            <GatsbyImage
              image={image.gatsbyImageData}
              className="exercise-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>Sets: {sets}</p>
            <p>Reps: {repetitions}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default ExercisesList
