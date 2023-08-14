import {Component} from 'react'

import './index.css'

import HistoryItems from '../HistoryItems'

class BrowserHistory extends Component {
  render() {
    const initialHistoryList = this.props
    return (
      <div className="bg-container">
        <div className="header-container">
          <div className="website-logo-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="search-container">
            <div className="search-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>
            <div className="input-container">
              <input
                className="search-input"
                placeholder="search history"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="history-container">
            <ul className="history-list">
              {initialHistoryList.map(eachHistory => (
                <HistoryItems historyItem={eachHistory} key={eachHistory.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
