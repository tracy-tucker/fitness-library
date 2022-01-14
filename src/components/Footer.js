import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Fitness Library</span> built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer


// Showing a simple footer with JS to updatde the copyright year of site