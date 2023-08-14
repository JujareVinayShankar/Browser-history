import './index.css'

const HistoryItems = props => {
  const {historyItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyItem
  return (
    <li className="list-item">
      <div className="list-item-container">
        <div className="time-history-container">
          <div className="time-container">
            <p className="time">{timeAccessed}</p>
          </div>
          <div className="url-container">
            <img src={logoUrl} className="logo" alt={title} />
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-icon-container">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </li>
  )
}

export default HistoryItems
