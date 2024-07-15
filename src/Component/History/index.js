import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class History extends Component {
  constructor(props) {
    super(props)
    const {historyList} = props
    this.state = {
      historyList,
      searchInput: '',
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {historyList, searchInput} = this.state
    const searchResults = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo"
            alt="app logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </nav>
        <div className="app-container">
          <ul className="history-container">
            {searchResults.length === 0 ? (
              <p className="error">There is no history to show</p>
            ) : (
              searchResults.map(eachHistory => (
                <HistoryItem
                  historyDetails={eachHistory}
                  deleteHistory={this.deleteHistory}
                  key={eachHistory.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default History
