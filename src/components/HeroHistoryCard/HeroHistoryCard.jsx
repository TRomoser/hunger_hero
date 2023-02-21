import "./HeroHistoryCard.css"
import { useNavigate } from "react-router-dom";

export default function HeroHistoryCard(props) {
  const { id, name, quantity, availableTime, availableDate, address, foodType, phoneNumber, photoUrl, content } = props;
  const navigate = useNavigate();

  function handlePostNav() {
    navigate(`/hero/${id}`);
  }

  function handleCancel() {
    console.log('cancel');
    // TODO: add delete functionality
  }

  return (
    <div key={id} className="hero-history-card">
      <img className="hero-history-card__img" src={photoUrl} alt={name} />
      <div className="hero-history-card__content">
        <div>
          <h4 className="hero-history-card__title">{name}</h4>
          <p className="hero-history-card__address">{address}</p>
          <p className="hero-history-card__food-type">{foodType}</p>
          <div className="hero-history-card__info-line">
            <span><i className="fa-regular fa-calendar-days"></i>{availableDate}</span>
            <span><i className='fa-regular fa-clock'></i>{availableTime}</span>
            <span><i className="fa-solid fa-phone"></i>{phoneNumber}</span>
          </div>
          <div className="action-buttons">
            <div onClick={handlePostNav} className="btn btn-green">See Post</div>
            <div onClick={handleCancel} className="btn btn-black">Need to Cancel?</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}