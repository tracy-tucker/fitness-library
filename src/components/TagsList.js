import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ exercises }) => {
  const newTags = setupTags(exercises)
  return (
    <div className="tag-container">
      <h4>Exercises</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          // deconstructuring
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList

// importing the setupTags function, creating a new array (newTags), then passing in the exercises object
// iterating over newTags with map to return a new tag array with an index
// Destructuring tag, then assigning key to index, and displaying the text and value elements on the page
// 