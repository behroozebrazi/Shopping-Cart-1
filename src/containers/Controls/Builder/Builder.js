import React from "react"
import "./Builder.css"

const Builder = (props) => {

  return (
    <div className="builder">
      Builder -
      <div>{props.title}</div>
      <button>Add</button>
      <button>Remove</button>
      - Builder
    </div>
  )
}

export default Builder