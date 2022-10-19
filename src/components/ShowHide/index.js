import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {isHide: true, isShow: true}

  onClickButton1 = () => {
    this.setState(prevState => ({isHide: !prevState.isHide}))
  }

  onClickButton2 = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  render() {
    const {isHide} = this.state
    const {isShow} = this.state
    const showHideFirstName = isHide ? (
      ''
    ) : (
      <div className="show-hide-text">
        <p>Joe</p>
      </div>
    )
    const showHideLastName = isShow ? (
      ''
    ) : (
      <div className="show-hide-text">
        <p>Jonas</p>
      </div>
    )
    return (
      <div className="bg-card">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div className="in-card">
            <button type="button" onClick={this.onClickButton1}>
              Show/Hide Firstname
            </button>
            {showHideFirstName}
          </div>
          <div className="in-card">
            <button type="button" onClick={this.onClickButton2}>
              Show/Hide Lastname
            </button>
            {showHideLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
