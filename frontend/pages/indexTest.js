import React from 'react'
import Link from 'next/link'
import { Subscribe } from 'unstated'
import { ClockContainer, CounterContainer } from '../containers'
import { Clock, Counter } from '../components'

class Index extends React.Component {
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render () {
    return (
      <Subscribe to={[ClockContainer, CounterContainer]}>
        {
          (clock, counter) => {
            this.timer = clock.interval
            return (
              <div>
                <Link href='/aboutTest'>
                  <button>
                    go to 
                  </button>
                </Link>
                <div>
                  <Clock clock={clock} />
                  <Counter counter={counter} />
                </div>
              </div>
            )
          }
        }
      </Subscribe>
    )
  }
}

export default Index
