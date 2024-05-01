// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, bananas: 0}

  onIncreasesMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }
  onIncreaseBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }
  
  render() {
    const {mangos, bananas} = this.state
    return (
      <div className="fruitscounter-app-container">
        <div className="fruitscounter-container">
          <h1 className="fruitscounter-heading">
            Bob ate <span className="fruits-counter-count">{mangos}</span>{' '}
            mangoes <span className="fruits-counter-count">{bananas}</span>{' '}
            bananas
          </h1>
          <div className="fruits-counter-container">
            <div className="fruits-counter-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruits-counter-image"
                alt="mango"
              />
              <button
                type="button"
                className="fruits-counter-button"
                onClick={this.onIncreasesMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits-counter-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="fruits-counter-image"
                alt="banana"
              />
              <button
                type="button"
                className="fruits-counter-button"
                onClick={this.onIncreaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
