import React from "react"
import "./Builder.css"

const Builder = (props) => {

  return (
    <div className="builder">
      Builder -
      <div>{props.title}</div>
      <button onClick={props.add}>Add</button>
      <button onClick={props.remove}>Remove</button>
      - Builder
    </div >
  )
}

export default Builder