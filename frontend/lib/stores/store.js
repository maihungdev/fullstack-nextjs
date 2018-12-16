import { types, applySnapshot, observable } from 'mobx-state-tree'


let store = null



const Todo = types
.model("Todo", {
   title: types.string,
    done: false
})
.actions(self => ({
    toggle() {
        self.done = !self.done
    },
    change() {
        self.title = '222'
    }
}))

const Store = types
  .model({
    category_id: types.string,
    category_slug: types.string,
    category_page: types.string,
    lastUpdate: types.Date,
    light: false,
    todos: types.array(Todo)
  })
  .actions((self) => {
    let timer
    function start () {
      timer = setInterval(() => {
        // mobx-state-tree doesn't allow anonymous callbacks changing data
        // pass off to another action instead
        self.update()
      }, 1000)
    }

    function update () {
      
      self.lastUpdate = Date.now()
      self.light = true
    }

    function stop () {
      clearInterval(timer)
    }

    function setCategory (category_id, category_slug) {
      self.category_id = category_id;
      self.category_slug = category_slug;
    }

    function setPageCategory (category_page) {
      self.category_page = category_page;
    }
    
    return { start, stop, update, setCategory, setPageCategory }
  })



export function initializeStore (isServer, snapshot = null) {
  if (isServer) {
    store = Store.create({ category_id: '', category_slug: '',category_page: '',lastUpdate: Date.now(), todos: [
      {
          title: "Get coffee"
      }
  ] })
  }
  if (store === null) {
    store = Store.create({ category_id: '', category_slug: '',category_page: '',lastUpdate: Date.now(), todos: [
      {
          title: "Get coffee"
      }
  ] })
  }
  if (snapshot) {
    applySnapshot(store, snapshot)
  }
  return store
}
