import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    products: [],
    totalPrice: 0
  }

  render() {
    return (
      <div className='App'>
        Start Here
      </div>
    )
  }
}

export default App