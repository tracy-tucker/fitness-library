const setupTags = exercises => {
  const allTags = {}

  exercises.forEach(exercise => {
    exercise.content.tags.forEach(tag => {
      console.log('olg tags', tag)
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    // console.log(tag)
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  
  return newTags
  // console.log("new tags", newTags)
}

export default setupTags

// Passing in exercises to the function
// creating an empty object (allTags)
// iterating over exercises, then iterating over tags, both with a forEach loop
// if the allTags object has the tag property, then add tag +1 times to the object
// if the allTags object does not have the tag property, create the property and set it equal to 1

// Create a new array of tags (newTags) by using Object.entries, which returns an array of [key, value] pair
// Using the sort method to then sort the string value of the resulted array
// Using localeCompare to return a number indicating whether the reference string comes before or after second