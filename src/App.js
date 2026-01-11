import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'

class App extends React.Component {

  state = {
    products: [],
    totalPrice: 0
  }

  render() {
    return (
      <div className='App'>
        <Layout>
          <div>Shopping</div>
        </Layout>
      </div>
    )
  }
}

export default App