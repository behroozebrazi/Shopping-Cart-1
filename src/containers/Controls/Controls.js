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
        <h3>Total price: {props.totalPrice}</h3>
      </div>
      {products.map((item, index) => {
        return <Builder
          key={index}
          title={item.title}
          add={() => props.addProduct(item.type)}
          remove={() => props.removeProduct(item.type)}
        />
      })}
    </div>
  )
}

export default Controls