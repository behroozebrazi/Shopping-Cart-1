import React from "react"
import "./Account.css"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"

class Account extends React.Component {
  state = {
    form: {
      name: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name...'
        }
      },
      email: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Email...'
        }
      },
      password: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password...'
        }
      }
    }
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
        <form>

          {elementArray.map((item) => {
            return <Input
              key={item.id}
              value={item.config.value}
              elementType={item.config.elementType}
              elementConfig={item.config.elementConfig} />
          })}

          <Button btnType='submit' btnClick={() => { }}>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Account