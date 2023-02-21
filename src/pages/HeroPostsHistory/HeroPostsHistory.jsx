import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroPostsHistory.css';
import HeroHistoryCard from '../../components/HeroHistoryCard/HeroHistoryCard';

export default function HeroPostsHistory() {
  // import props/posts from App.jsx
  const navigate = useNavigate();

  const handlePostPage = () => {
    navigate('/hero/create');
  }

  return (
    <div>
      <h2>Your Posts</h2>
      <div className='create-post-nav' onClick={handlePostPage}>Create Post</div>
      {/* {posts.map(post => (
        <HeroHistoryCard key={post.id} title={post.title} content={post.content} />
      ))} */}
    </div>
  );
}