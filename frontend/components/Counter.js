export default ({ counter }) => (
  <div>
    <h1>Count: <span>{counter.state.count}</span></h1>
    <h1>Count: <span>{counter.state.item}</span></h1>
    <button onClick={() => counter.decrement()}>-1</button>
    <button onClick={() => counter.increment()}>+1</button>
    <button onClick={() => counter.reset()}>Reset</button>
  </div>
)
