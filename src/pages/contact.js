import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Let's get in touch!</h3>
            <p>
              Waistcoat asymmetrical knausgaard tacos wolf pop-up echo park
              bitters pinterest.
            </p>
            <p>
              Biodiesel lo-fi cred tacos godard meh farm-to-table flannel four
              dollar toast lyft air plant hexagon 8-bit chartreuse.
            </p>
            <p>
              Street art bespoke edison bulb blog, authentic craft beer
              typewriter crucifix kinfolk actually vape lumbersexual. Poutine
              kinfolk microdosing direct trade shabby chic. Coloring book master
              cleanse ramps, kogi tacos celiac deep v farm-to-table. Pickled
              XOXO godard shaman.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your Name</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
