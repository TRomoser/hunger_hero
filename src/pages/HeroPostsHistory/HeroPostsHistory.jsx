import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroPostsHistory.css';
import HeroHistoryCard from '../../components/HeroHistoryCard/HeroHistoryCard';

// add posts
export default function HeroPostsHistory({ user, handleDeleteFood }) {
  // import props/posts from App.jsx
  const posts = [{
    id: 0,
    name: 'Vegetables',
    quantity: 20,
    availableTime: '12:00 PM to 5:00 PM',
    availableDate: '12/12/2023',
    address: '1234 Main St',
    foodType: 'Potatoes',
    phoneNumber: '123-456-7890',
    photoUrl: 'https://picsum.photos/200/300?random=0',
    content: `Free pizza for anyone who needs it. Please come by and take some. We have food to give away.`
    }, {
    id: 1,
    name: 'Prepared Meals',
    quantity: 10,
    availableTime: '12:00 PM to 5:00 PM',
    availableDate: '12/12/2023',
    address: '1234 Main St',
    foodType: 'Pizza',
    phoneNumber: '123-456-7890',
    photoUrl: 'https://picsum.photos/200/300?random=1',
    content: `Free Potatoes for anyone who needs it. Please come by and take some. We have food to give away.`
    }, {
    id: 2,
    name: 'Prepared Meals',
    quantity: 45,
    availableTime: '6:00 PM to 8:00 PM',
    availableDate: '12/12/2023',
    address: '1234 Main St',
    foodType: 'Sandwiches',
    phoneNumber: '123-456-7890',
    photoUrl: 'https://picsum.photos/200/300?random=2',
    content: `Free pizza for anyone who needs it. Please come by and take some. We have food to give away.`
    }];

  return (
    <div>
      <h2 className='hero-history-page__title'>Your Posts</h2>
      <div className="create-post-field">
        <Link to="/hero/create">
        <div className="create-post-icon-nav">
          <i className="fa-solid fa-plus create-post-icon"></i>
          <div className="create-post-nav">
            Create Post
          </div>
        </div>
      </Link>
      </div>
        {posts.map(post => (
          <HeroHistoryCard key={post.id} name={post.name} quantity={post} availableTime={post.availableTime} availableDate={post.availableDate} address={post.address} foodType={post.foodType} phoneNumber={post.phoneNumber}
          photoUrl={post.photoUrl}
          content={post.content} />
        ))}
    </div>
  );
}