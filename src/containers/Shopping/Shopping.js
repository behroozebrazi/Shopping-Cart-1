import React from "react"
import Wrapper from "../../hoc/Wrapper"
import Controls from "../Controls/Controls"

class Shopping extends React.Component {

  // Number of items in the cart
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0
    },
    totalPrice: 0
  }

  render() {
    return (
      <Wrapper>
        Controls -
        <Controls />
        - Controls
      </Wrapper>
    )
  }
}

export default Shopping