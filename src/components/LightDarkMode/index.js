// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onclickColorChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const modeClassName = isDarkMode ? 'dark-mode' : 'light - mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Color</h1>
          <button
            type="button"
            onClick={this.onclickColorChange}
            className="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
