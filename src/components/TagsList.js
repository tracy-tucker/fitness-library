import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

const TagsList = ({ exercises }) => {
  const newTags = setupTags(exercises)
  return (
    <div className="tag-container">
      <h4>Exercises</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          // deconstructuring
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
