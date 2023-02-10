import * as foodsAPI from '../../utilities/food-api';
import { useEffect, useState } from 'react';

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
    <h1>Hero Home Page</h1>
    {/* {posts.name} */}
    {
        posts.map((post, idx) => {
            return (
                <h1>{post.name}</h1>
            )
        })
    }
    </div>
  );
}