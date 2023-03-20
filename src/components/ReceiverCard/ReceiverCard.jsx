import './ReceiverCard.css'

export default function ReceiverCard({ user, location, quantity, name, availableTime }) {
return (
  <div className="receiver-card">
    <div className="receiver-card-header">
      <h2>Here is the receiver</h2>
      <div className="receiver-card-header-item">
        <i className="fa-solid fa-user-circle"></i>
        {/* <span>{user.name}</span> */}
      </div>
    </div>
    <div className="receiver-card-body">
      <div className="receiver-card-header-item">
        <i className="fa-solid fa-location-dot"></i>
        {/* <span>{location}</span> */}
      </div>
      <div className="receiver-card-body-item">
        <i className="fa-solid fa-phone"></i>
        {/* <span>{user.phoneNumber}</span> */}
      </div>
      <div className="receiver-card-body-item">
        <i className="fa-solid fa-envelope"></i>
        <span>{user.email}</span>
      </div>
      <div className="receiver-card-body-item">
        <textarea>
          {/* Hi {user.name}, I can pickup {quantity} {name} to you by {availableTime}. Please let me know if this works for you. */}
        </textarea>
      </div>
      <div className="receiver-card-buttons">
        <button className="receiver-card-accept-btn">Accept Request
        </button>
        <button className="receiver-card-cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  </div>
)}