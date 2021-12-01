import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About FunFitness</h1>
        <main className="page">
          <section className="about-page">
            <article>
              <h2>PBR&B XOXO mlkshk, listicle actually.</h2>
              <p>
                Palo santo cardigan post-ironic austin pabst, asymmetrical
                franzen hot chicken la croix photo booth. Deep v unicorn cray,
                tattooed celiac put a bird on it 90's asymmetrical.
              </p>
              <p>
                Palo santo cardigan post-ironic austin pabst, asymmetrical
                franzen hot chicken la croix photo booth. Deep v unicorn cray,
                tattooed celiac put a bird on it 90's asymmetrical.
              </p>
              <Link to="/contact" className="btn">
                Contact Us
              </Link>
            </article>
            <StaticImage
              src="../assets/images/about.jpg"
              alt="Person leaping"
              className="about-img"
              placeholder="blurred"
            />
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default About
