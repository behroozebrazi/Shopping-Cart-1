import React from "react"
import "./NavItems.css"
import NavItem from "../NavItem/NavItem"

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <NavItem link="/">Shopping</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  )
}

export default NavItems