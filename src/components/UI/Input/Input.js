import "./Input.css"

const Input = (props) => {
  // check validatoin
  const inputClass = ['input-element']
  if (props.used && props.invalid) {
    inputClass.push('invalid-input')
  }

  let inputElement = null;
  switch (props.inputType) {
    case 'input':
      inputElement = <input
        className={inputClass.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.change} />
      break
    default:
      inputElement = <input
        className={inputClass.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.change} />
  }

  return <div className="input">{inputElement}</div>
}

export default Input