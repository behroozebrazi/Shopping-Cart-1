import React from "react"
import "./Layout.css"
import Wrapper from "../../hoc/Wrapper"

const Layout = (props) => {
  return (
    <Wrapper>
      <div>Navigation</div>
      <main className="content">{props.children}</main>
      <div>Backdrop</div>
    </Wrapper>
  )
}

export default Layout