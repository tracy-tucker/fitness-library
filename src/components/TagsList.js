import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ exercises }) => {
  const newTags = setupTags(exercises)
  return <div className="tag-container">this is tagslist</div>
}

export default TagsList
