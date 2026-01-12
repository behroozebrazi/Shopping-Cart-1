import "./Controls.css"
import Builder from "./Builder/Builder"

// Items for sale
const products = [
  { title: 'Product 1', type: 'product1' },
  { title: 'Product 2', type: 'product2' },
  { title: 'Product 3', type: 'product3' },
  { title: 'Product 4', type: 'product4' }
]


const Controls = (props) => {
  return (
    <div className="controls">
      <div>
        <p className="price">Total price: {props.totalPrice}</p>
      </div>
      {products.map((item, index) => {
        return <Builder
          key={index}
          title={item.title}
          add={() => props.addProduct(item.type)}
          remove={() => props.removeProduct(item.type)}
        />
      })}
      <button className="order-btn" onClick={props.showModal}>Order</button>
    </div >
  )
}

export default Controls