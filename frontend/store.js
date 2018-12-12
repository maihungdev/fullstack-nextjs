import { Container, Subscribe, Provider } from 'unstated'

class Store extends Container {
  // Default state
  state = {
    githubUsername: 'google',
    item: 0,
    showCart: false,
    info: []
  } 

  setInitialState = (newState) => {
    // Essa função serve para o componente App mudar o estado global com um estado previamente salvo no navegador.
    // Ela só pode ser chamada uma vez, logo após o app ser montado
    this.setState(newState, () => this.setInitialState = () => {})
  }

  changeUsername = (newValue) => {
    this.setState(prevState => ({
      githubUsername: newValue
    }))
  }
  
  isShowCart = () => {
    this.setState(prevState => ({
      showCart: !prevState.showCart
    }))
  }

  addItem = (newValue) => {
    this.setState(prevState => ({
      item: newValue
    }))
  }
  increment = (newValue) => {
    this.setState(prevState => ({
      item: newValue
    }))
  }
  decrement = (newValue) => {
    this.setState(prevState => ({
      item: newValue
    }))
  }
  addCart = (id, name, price) => {
    this.setState(prevState => ({
      info: [...this.state.info,{
        id: id,
        name: name,
        price: price
      }
      ]
    }))
  }

  
}

/**
 * 
 * @export - Global State Class
 */
export const StoreClass = new Store()

/**
 * Fazer os componentes filhos atualizarem em qualquer atualização no stado global e além disso
 * passar o estado global junto com as actions em prop.store.
 * 
 * @return - React Component
 * @example
 *   import { connect } from '../store'
 *   class Home extends Component {
 *     render() {
 *       return this.props.store.state.user
 *     }
 *   }
 *   export default connect(Home)
 */
export const connect = (Component) => props => (
  <Subscribe to={[StoreClass]}>
    {(store) => (
      <Component store={store} {...props}>{props.children}</Component>
    )}
  </Subscribe>
)

/**
 * Só é usado em App.js
 * 
 * @return - React Component
 */
export const GlobalStore = (props) => (
  <Provider inject={[StoreClass]}>{props.children}</Provider>
)