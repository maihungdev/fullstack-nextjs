import { Container } from 'unstated'

export default class CounterContainer extends Container {
  state = {
    count: 0,
    item: 10
  }

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }))
    this.setState((state) => ({ item: state.item + 2 }))
  }

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1 }))
    this.setState((state) => ({ item: state.item - 2 }))
  }

  reset = () => {
    this.setState({ count: 0 })
  }
}
