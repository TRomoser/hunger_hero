import * as foodsAPI from '../../utilities/food-api';
import { useEffect, useState } from 'react';
import './HeroHomePage.css'


export default function HeroHomePage({user, navigate}) {

    const [posts, setPosts] = useState([])

  // API REQUEST ON COMPONENT MOUNT
  useEffect(function() {
    (async function() {
        console.log('index fnt')
        // foodsAPI.getAll()
        const foodPosts = await foodsAPI.getAll()
        setPosts(foodPosts)
    })();
    console.log("THIS IS THE USER", user)
  }, [])

  useEffect(() => {
      console.log(posts)
  }, [posts])

  return (
    <div>
      <div  className="md:flex-auto home_pg flex-wrap">
        {posts && posts.map((post, i) => {
          return (
            <div key={i} className="mb-4 w-1/3 h-2/3">
              <div className="bck-clr max-w-sm rounded overflow-hidden shadow-lg text-red-800">
                <div className='imgDiv'>
                    <img className="postImg" src={post.image ? post.image : post.photoUrl} alt="Food"></img>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.name}</div>
                    <p className="text-gray-700 text-base">
                        {post.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Available: {post.availability}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Quantity: {post.quantity}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Location: {post.location}</span>
                </div>
                <div>
                  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Request
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
} 