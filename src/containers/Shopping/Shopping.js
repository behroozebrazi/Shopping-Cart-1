import React from "react"
import Wrapper from "../../hoc/Wrapper"
import Controls from "../Controls/Controls"
import Modal from "../../components/UI/Modal/Modal"
import Order from "../../components/Order/Order"
import Loader from "../../components/UI/Loader/Loader"
import axios from "../../axios-orders"

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
    products: null,
    totalPrice: 0,
    showModal: false,
    loading: false
  }

  // get data from backend after loading DOM
  componentDidMount() {
    axios.get('/products.json')
      .then((response) => {
        this.setState({ products: response.data })
        console.log(response)
      })
      .catch((error) => { console.log(error) })
  }

  // post data to backend after clicking on "Place order" button
  placeOrderHandler = () => {
    this.setState({ loading: true, showModal: true })
    const order = {
      customer: { name: 'Behrooz', email: 'gmail@gmail.com' },
      products: this.state.products,
      totalPrice: this.state.totalPrice,
    }
    axios.post('/orders.json', order)
      .then((response) => { this.setState({ loading: false, showModal: false }) })
      .catch((error) => {
        this.setState({ loading: false, showModal: false })
        console.log(error)
      })
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
    let order = null
    let controls = <Loader />

    if (this.state.products) {
      order = this.state.loading
        ? <Loader />
        : <Order
          products={this.state.products}
          btnYes={this.placeOrderHandler}
          btnNo={this.showModalHandler}
          totalPrice={this.state.totalPrice}
        />

      controls = <Controls
        addProduct={this.addProductHandler}
        removeProduct={this.removeProductHandler}
        totalPrice={this.state.totalPrice}
        showModal={this.showModalHandler}
        productsNumber={this.state.products}
        prices={prices}
      />
    }

    return (
      <Wrapper>
        <Modal showModal={this.state.showModal} hideBackdrop={this.showModalHandler}>
          {order}
        </Modal>
        {controls}
      </Wrapper>
    )
  }
}

export default Shopping