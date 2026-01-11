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
      {products.map((item, index) => (<Builder key={index} title={item.title} />))}
    </div>
  )
}

export default Controls