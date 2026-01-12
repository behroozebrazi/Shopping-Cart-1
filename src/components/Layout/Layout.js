import React from "react"
import "./Layout.css"
import Wrapper from "../../hoc/Wrapper"
import Navbar from "../Navigation/Navbar/Navbar"

const Layout = (props) => {
  return (
    <Wrapper>
      <Navbar />
      <main className="content">{props.children}</main>
      <div>Backdrop</div>
    </Wrapper>
  )
}

export default Layout