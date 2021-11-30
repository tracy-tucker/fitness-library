import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../css/layout.css"

const Layout = ({ children }) => {
  console.log(children)
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
