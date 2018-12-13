import React, { Component } from 'react'
var slug = require('slug')
const generate = require('nanoid/generate');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';


export default class SLUG extends Component {
  constructor(props) {
    super(props)
    this.state = {
       slug : '',
       id: ''
    }
  }
  
  fomatSlug = (e) => {
    e.preventDefault();
    var x = slug(e.target.value, {lower: true})
    var y = generate(alphabet, 7);
    this.setState({
        slug: x,
        id: y
    });
  }
  render() {
    return (
      <div>
        <input name="slug" onChange={(e) => this.fomatSlug(e)}></input>
        <p>{this.state.slug}-{this.state.id}</p>
      </div>
    )
  }
}
