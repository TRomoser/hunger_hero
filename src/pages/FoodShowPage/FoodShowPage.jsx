import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api';
import * as foodAPI from '../../utilities/food-api';


const FoodShowPage = () => {

    const [post, setPost] = useState(null)
    const [owner, setOwner] = useState(null)

    const { id } = useParams()

    console.log(id, "PARAMS")


    const getUser = async () => {
        const owner = await usersAPI.fetchUser(post.user)
            setOwner(owner)

    }

    useEffect(() => {

        (async function() {  
            // usersAPI.getAll()
            const food = await foodAPI.getFood(id)
            console.log("THIS IS THE FOOD", food)
            setPost(food)

        })();
    }, []) 

    useEffect(() => {
        getUser()
    }, [post])

    
     





    return(
    <div>

        { post && owner ? 
        <>
        <h1>{post.name}</h1>
        <h1>{owner.email}</h1>
        </>
        
        
        : <h1>NO OWNER AND POST</h1>
        
    
    }
        {/* <h1>{post.name}</h1> */}

        {/* <h1>{post.quantity}</h1>
        <h1>{post.description}</h1> */}
        {/* <h1>{postOwner.email}</h1> */}

    </div>
    ) 

}

export default FoodShowPage 