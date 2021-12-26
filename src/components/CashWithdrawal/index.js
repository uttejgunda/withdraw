import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balanceAmt: 2000}

  changeBalance = value => {
    this.setState(prevState => ({balanceAmt: prevState.balanceAmt - value}))
  }

  render() {
    const {balanceAmt} = this.state
    const {denominationsList} = this.props
    const name = 'Sarrah Williams'
    const initial = name.splice(0, 1)

    return (
      <div className="bg-container">
        <div className="app-card">
          <div className="name-image-container">
            <p className="icon">{initial}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-header">Your Balance</p>
            <div className="balance-amt-container">
              <p className="balance-amt">{balanceAmt}</p>
              <p className="rupees-tag">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-header">Withdraw</p>
          <p className="withdraw-tag">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                details={eachItem}
                changeBalance={this.changeBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
