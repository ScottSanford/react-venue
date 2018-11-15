import React, { Component } from 'react'
import './resources/styles.css'

import Header from './components/Header_Footer/Header'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', background: 'orangered'}}>
        <Header />
        hello
      </div>
    )
  }
}

export default App
