import React from "react"
import Wrapper from "../../hoc/Wrapper"

const Order = (props) => {
  const productsList = Object.keys(props.products)
  const summery = productsList.map((item) => {
    return (
      <li key={item}>
        {item}:{props.products[item]}
      </li>
    )
  })
  
  return (
    <Wrapper>
      <h3>Order</h3>
      <ul>
        {summery}
      </ul>
    </Wrapper>
  )
}

export default Order