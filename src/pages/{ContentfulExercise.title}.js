import React from "react"

const ExerciseTemplate = props => {
  console.log(props)
  return (
    <div>
      <h4>Exercise Template</h4>
      <h5>{props.params.title}</h5>
    </div>
  )
}

export default ExerciseTemplate
