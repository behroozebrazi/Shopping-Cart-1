import React from "react"
import "./Account.css"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"

class Account extends React.Component {
  render() {
    return (
      <div className="account">
        <h2>Account</h2>
        <form>
          <Input type="text" placeholder="Name..." />
          <Input type="email" placeholder="Email..." />
          <Input type="password" placeholder="Password..." />
          <Button btnType='submit' btnClick={() => { }}>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Account