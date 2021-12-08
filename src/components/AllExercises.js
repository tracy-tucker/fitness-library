import React from "react"
import ExercisesList from "./ExercisesList"
import TagsList from "./TagsList"

const AllExercises = () => {
  return (
    <div>
      <h4>All Exercises</h4>
      <TagsList />
      <ExercisesList />
    </div>
  )
}

export default AllExercises
