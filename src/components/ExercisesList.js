import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

//providing a default empty array to avoid errors if exercise missing
const ExercisesList = ({ exercises = [] }) => {
  return (
    <div className="exercises-list">
      {exercises.map(exercise => {
        // console.log(exercise)
        // destructuring
        const { id, title, image, repetitions, sets } = exercise
        // getImage helper function
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="exercise">
            <GatsbyImage
              image={pathToImage}
              className="exercise-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Sets: {sets} | Reps: {repetitions}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default ExercisesList

// Destructuring exercises with a default empty array to avoid render errors
// Using GatsbyImage to render dynamic images to the component, while utilizing the getImage helper function to avoid image render errors
// Creating a slug variable that calls the slugify method on the title property, transforming each result into a lowercased slug
// Implementing slug within each Link

