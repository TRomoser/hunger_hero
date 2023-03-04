import './PostCard.css'

export default function PostCard({key, name, quantity, description, availableTime, availableDate, location, photoUrl, user}) {
  return (
    <div className='food-card'>
      <div className='food-card-image'>
        <img src={photoUrl} alt='food-item' />
      </div>
      <div className='food-card-info'>
        <div className='' >{name}</div>
        <div className="" >{description}</div>
        <div className="" >{location}</div>
        <div className="" >{quantity}</div>
        <div className="" ><i className="fa-regular fa-calendar-days"></i>{availableDate}<i className='fa-regular fa-clock'></i>{availableTime}</div>
      </div>
    </div>
    
  );
}