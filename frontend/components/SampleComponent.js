import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
@inject('store')
@observer
class SampleComponent extends React.Component {
  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }

  render () {
    const {id} = this.props;    
    return (
      <>
       <p> {this.props.title}</p> 
       <p>{this.props.store.todos[0].title}</p> 
       <p>{this.props.store.category_id}</p> 
       <p> {this.props.fid}</p> 
        {/* <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} /> */}
        <button onClick={() => this.props.store.todos[0].change()}>Change</button>
        <button onClick={() => this.props.store.setCategory('10')}>Change category</button>
        <nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>
      </>
    )
  }
}

export default SampleComponent
