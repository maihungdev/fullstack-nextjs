import React, { Component } from 'react'
import { connect } from '../store'


class Add extends Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }
  handleInputChange = (event) => {
    this.store.addItem(event.target.value)
  }
  increment = () => {
    this.store.increment(this.store.state.item+1)
  }
  decrement = () => {
    this.store.increment(this.store.state.item-1)
  }
  addCart = (id, name, price) => {
    this.store.addCart(id, name, price)
  }
  render() {
    return (
        <>
        {this.store.state.item}
        <input
          type="text" 
          name="username" 
          className="form-control inputUsername" 
          value={this.store.state.item} 
          placeholder="Username do GitHub" 
          onChange={this.handleInputChange} 
        />
         <button onClick={() => this.increment()}>+1</button>
         <button onClick={() => this.decrement()}>-1</button>
         <button onClick={() => this.addCart("id1", "Tieu de 1", 500)}>Add to cart 1</button>
         <button onClick={() => this.addCart("id2", "Tieu de 2", 700)}>Add to cart 2</button>
         <button onClick={() => this.addCart("id3", "Tieu de 3", 800)}>Add to cart 3</button>
         <button onClick={() => this.addCart("id4", "Tieu de 4", 1000)}>Add to cart 4</button>
        </>
    )
  }
}


export default connect(Add)