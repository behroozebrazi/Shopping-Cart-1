import React from "react"
import "Button.css"

const Button = (props) => {
  return (
    <button className={`button ${props.btnType}`} onClick={props.btnClick}>
      {props.children}
    </button>
  )
}

export default Button