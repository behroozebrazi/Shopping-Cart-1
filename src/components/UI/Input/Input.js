import react from "react"
import "./Input.css"

const Input = (props) => {
  let inputElement = null;
  switch (props.inputType) {
    case 'input':
      inputElement = <input className="input-element"
        {...props.elementConfig}
        value={props.value} />
      break
    default:
      inputElement = <input
        className="input-element"
        {...props.elementConfig}
        value={props.value} />
  }
  return <div className="input">{inputElement}</div>
}

export default Input