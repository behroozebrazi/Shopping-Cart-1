import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'
import Checkout from './containers/Checkout/Checkout'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Shopping} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App