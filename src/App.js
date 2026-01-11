import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        Layout -
        <Layout>
          Shopping -
          <Shopping />
          - Shopping
        </Layout>
        - Layout
      </div>
    )
  }
}

export default App