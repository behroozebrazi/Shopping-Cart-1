import React from "react"
import Wrapper from "../../hoc/Wrapper"
import Controls from "../Controls/Controls"
import Modal from "../../components/UI/Modal/Modal"
import Order from "../../components/Order/Order"

// products price $
const prices = {
  product1: 10,
  product2: 20,
  product3: 30,
  product4: 40
}

class Shopping extends React.Component {

  // Number of items in the cart
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0
    },
    totalPrice: 0,
    showModal: false
  }

  // continue shopping after clicking on Yes button
  continueShoppingHandler = () => {
    console.log('Continue Shopping')
    this.showModalHandler()
  }

  // show/hide cart
  showModalHandler = () => {
    const showModal = !this.state.showModal
    this.setState({ showModal: showModal })
  }

  // add product to the cart
  addProductHandler = (type) => {
    const products = { ...this.state.products }
    products[type] += 1
    const totalPrice = this.state.totalPrice + prices[type]
    this.setState({ products: products, totalPrice: totalPrice })
  }

  // remove product from the cart
  removeProductHandler = (type) => {
    const products = { ...this.state.products }
    products[type] -= 1
    if (products[type] >= 0) {
      const totalPrice = this.state.totalPrice - prices[type]
      this.setState({ products: products, totalPrice: totalPrice })
    }
  }

  render() {
    return (
      <Wrapper>
        <Modal showModal={this.state.showModal} hideBackdrop={this.showModalHandler}>
          <Order
            products={this.state.products}
            btnYes={this.continueShoppingHandler}
            btnNo={this.showModalHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Controls
          addProduct={this.addProductHandler}
          removeProduct={this.removeProductHandler}
          totalPrice={this.state.totalPrice}
          showModal={this.showModalHandler}
          productsNumber={this.state.products}
          prices={prices}
        />
      </Wrapper>
    )
  }
}

export default Shopping