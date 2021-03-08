import React, { Component } from 'react';
import './index.css'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      number : 0,
      color : ''
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.redHandler = this.redHandler.bind(this)
  }

  clickHandler() {
    this.setState(prevState => {
      return {
        number:prevState.number + 1
      }
    })
  }

  redHandler() {
    this.setState(prevState => {
      return {
        number: prevState.number -1
      }
    })
  }



  render() { 
    return ( 
      <div className="main">
        <h1 className="title">Counter App</h1>
        <div className="count_body">
          <h3 className={this.state.number >= 0 ? 'count_positive' : 'count_negative'}>{this.state.number}</h3>
          <button className="btn btn_decrease" onClick={this.redHandler}>Punch To Decrease</button>
          <button className="btn btn_increase" onClick={this.clickHandler}>Punch To Increase</button>
        </div>
      </div>
     );
  }
}
 
export default App;
