import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./NavItem.css"

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <Link to={props.link}>{props.children}</Link>
    </li>
  )
}

export default NavItem