import "./HeroHistoryCard.css"

export default function HeroHistoryCard(props) {
  const { photoUrl, name, address, foodType, availability, timeAvailable, phoneNumber } = props;

  return (
    <div className="hero-history-card">
      <img src={photoUrl} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{address}</p>
        <p>{foodType}</p>
        <div className="info-line">
          <span><i className="fa fa-calendar"></i></span>
          <span>{availability}</span>
          <span><i className="fa fa-clock-o"></i></span>
          <span>{timeAvailable}</span>
          <span><i className="fa fa-phone"></i></span>
          <span>{phoneNumber}</span>
        </div>
        <div className="action-buttons">
          <div>See Post</div>
          <div>Need to Cancel?</div>
        </div>
      </div>
    </div>
  );
}