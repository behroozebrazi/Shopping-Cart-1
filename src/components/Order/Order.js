import React from "react"
import "./Order.css"
import Wrapper from "../../hoc/Wrapper"
import Button from "../UI/Button/Button"

const Order = (props) => {
  // extract an object's keys to an array
  const productsList = Object.keys(props.products)
  const summery = productsList.map((item) => {
    const productName = item.charAt(0).toUpperCase() + item.slice(1, -1) + ' ' + item.slice(-1)
    return (
      <li key={item}>
        {productName} : <b>{props.products[item]}</b>
      </li>
    )
  })

  return (
    <Wrapper>
      <h3>Order</h3>
      <ul className="order">
        {summery}
      </ul>
      <p>Continue?</p>
      <Button btnType='success' btnClick={props.btnYes}>Yes</Button>
      <Button btnType='danger' btnClick={props.btnNo}>No</Button>
    </Wrapper>
  )
}

export default Order