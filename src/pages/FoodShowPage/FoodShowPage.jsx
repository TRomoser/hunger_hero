import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api';
import * as foodAPI from '../../utilities/food-api';


const FoodShowPage = () => {

    const [post, setPost] = useState(null)
    const [owner, setOwner] = useState(null)
    // const { id } = route.params

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

    
    // const listItems = post.condition.map((el) => 
    //     <li>{el}</li>
    // )





    return(
    <div className='body'>

        { post && owner ? 
        <>
        <h1>{post.name}</h1>
        <h1>{owner.email}</h1>
        <h1>{post.quantity}</h1>
        <h1>{post.description}</h1>
        <h1>{post.description}</h1>
        {/* <ul>
            {listItems}
        </ul> */}
        <h1>{post.availableTime}</h1>
        <h1>{post.availableDate}</h1>
        <h1>{post.location}</h1>
        <h1>{owner.businessName}</h1>
        <h1>{owner.address}</h1>
        <h1>{owner.city}</h1>
        <h1>{owner.state}</h1>
        <h1>{owner.zipCode}</h1>
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