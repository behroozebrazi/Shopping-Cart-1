import React from "react"
import "./Account.css"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import axios from "../../axios-orders"

class Account extends React.Component {
  state = {
    form: {
      name: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name...'
        },
        validation: {
          required: true
        },
        valid: false,
        used: false
      },
      email: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Email...'
        },
        validation: {
          required: true
        },
        valid: false,
        used: false
      },
      password: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password...'
        },
        validation: {
          required: true
        },
        valid: false,
        used: false
      }
    }
  }

  // check inputs validatoin
  checkValidation = (value, rules) => {
    let isValid = false
    if (rules.required) {
      isValid = value.trim() !== ''
    }
    return isValid
  }

  // update state with input data
  inputChangeHandler = (event, inputElement) => {
    const updatedForm = { ...this.state.form }
    const updatedElement = { ...updatedForm[inputElement] }
    updatedElement.value = event.target.value
    updatedElement.valid = this.checkValidation(updatedElement.value, updatedElement.validation)
    updatedElement.used = true
    updatedForm[inputElement] = updatedElement
    this.setState({ form: updatedForm })
  }

  // form submit button handler
  submitHandler = (event) => {
    event.preventDefault()
    // extract data from form
    const formData = {}
    for (let item in this.state.form) {
      formData[item] = this.state.form[item].value
    }
    // send extracted data to backend
    axios.post('/account.json', formData)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    // convert an object to an array
    const elementArray = []
    for (let item in this.state.form) {
      elementArray.push({
        id: item,
        config: this.state.form[item]
      })
    }

    return (
      <div className="account">
        <h2>Account</h2>
        <form onSubmit={this.submitHandler}>
          {elementArray.map((item) => {
            return <Input
              key={item.id}
              value={item.config.value}
              elementType={item.config.elementType}
              elementConfig={item.config.elementConfig}
              invalid={!item.config.valid}
              used={item.config.used}
              change={(event) => this.inputChangeHandler(event, item.id)}
            />
          })}
          <Button btnType='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Account