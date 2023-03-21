import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  hideShowFirst = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState(prevState => ({firstName: false}))
    } else {
      this.setState(prevState => ({firstName: true}))
    }
  }

  hideShowLast = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState(prevState => ({lastName: false}))
    } else {
      this.setState(prevState => ({lastName: true}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1 className="head">Show/Hide</h1>
        <div className="profileContainer">
          <div className="firstContainer">
            <button type="submit" className="btn" onClick={this.hideShowFirst}>
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="name">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="lastContainer">
            <button type="submit" className="btn-1" onClick={this.hideShowLast}>
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="name">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
