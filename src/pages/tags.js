import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulExercise.nodes)

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} exercise</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulExercise {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
