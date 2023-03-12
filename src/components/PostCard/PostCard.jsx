import './PostCard.css'

export default function PostCard({ name, quantity, description, availableTime, availableDate, location, photoUrl, user}) {
  return (
    <div className='food-card'>
  <div className='food-card-image'>
    <img src={photoUrl} alt='food-item' />
  </div>
  <div className='food-card-info'>
    <div className='food-card-info-item'>{name}</div>
    <div className='food-card-info-item'>{description}</div>
    <div className='food-card-info-item'>
    <i className="fa-solid fa-location-dot"></i>
      <span>{location}</span>
    </div>
    <div className='food-card-info-item'>{quantity}</div>
    <div className='food-card-info-item'>
      <i className='fa-regular fa-calendar-days'></i>
      <span>{availableDate}</span>
    </div>
    <div className='food-card-info-item'>
      <i className='fa-regular fa-clock'></i>
      <span>{availableTime}</span>
    </div>
  </div>
  <button className='request-button'>Request Pick Up</button>
</div>

  );
}