import * as foodsAPI from '../../utilities/food-api';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function HeroHomePage({user}) {

    const [posts, setPosts] = useState([])

  // API REQUEST ON COMPONENT MOUNT
  useEffect(function() {
    (async function() {
        console.log('index fnt')
        // foodsAPI.getAll()
        const foodPosts = await foodsAPI.getAll()
        setPosts(foodPosts)
    })();
}, [])

    useEffect(() => {
        console.log(posts)
    }, [posts])


  return (


<div>
<div  class="md:flex-auto home_pg flex-wrap">
    {posts && posts.map((post, i) => {
        return (
            <div key={i} class="mb-4 w-1/3 h-2/3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <Link onClick={() => getCrystalbyID(crystal._id)} to={`/crystalhome/${crystal._id}`}> */}
                        <img src='https://unsplash.com/photos/kfDsMDyX1K0' alt="Pizza"></img>
                    {/* </Link> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{post.name}</div>
                        <p class="text-gray-700 text-base">
                            {post.description}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{post.availability}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{post.quantity}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{post.location}</span>
                    </div>
                </div>


            </div>
        )

    })}
</div>

</div>
  );
}