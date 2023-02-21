import { useState } from 'react';
import { createFood } from '../../utilities/food-api'

import './HeroForm.css'
import  PhotoUpload  from '../PhotoUpload/PhotoUpload'

const FoodTypes = {
    CannedFood: "Canned Food",
    Produce: "Fresh Produce",
    ShelfStable: "Shelf Stable",
    PreparedMeals: "Prepared Meals",
    Mixed: "Mixed"
  }
  
  const Availability = {
    Immediately: "Immediately",
    Within24hours: "Within 24 hours",
    WithinAWeek: "Within a week"
  }

export default function HeroForm(props) {

  const { navigate } = props

    const [state, setState] = useState({
        name: FoodTypes.CannedFood,
        quantity: '',
        description: '',
        availability: Availability.Immediately,
        location: '',
        photoUrl: '',
        error: ''
        
    })

    const handleChange = (evt) => {
        setState({...state,
          [evt.target.name]: evt.target.value,
          error: ''
        });
        console.log(state, "this is the state")
    };

    const handleSubmit = async (evt) => {
      console.log(state, "THIS IS THE STATE")
      evt.preventDefault();
      try {
        const {name, quantity, description, availability, location, photoUrl} = state;
        const formData = {name, quantity, description, availability, location, photoUrl};
        // The promise returned by the signUp service
        // method will resolve to the user object included
        // in the payload of the JSON Web Token (JWT)
        const food = await createFood(formData);
        // this.props.setFood(food);
        navigate('/hero')
      } catch {
        // An error occurred
        setState({ error: 'Food creation failed - Try Again' });
      }
    };

    return (
        <div className='parent'>
          <div className="child form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>What kind of food do you want to donate?</label>
                  <select className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' name="name" value={state.name} onChange={handleChange} required >
                    <option value={FoodTypes.CannedFood}>Canned Food</option>
                    <option value={FoodTypes.Produce}>Fresh Produce</option>
                    <option value={FoodTypes.PreparedMeals}>Prepared Meals</option>
                    <option value={FoodTypes.ShelfStable}>Shelf Stable</option>
                    <option value={FoodTypes.Mixed}>Mixed</option>
                  </select>
                </div>
                
                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>When will this be available for pick up?</label>
                  <select className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' name="availability" value={state.availability} onChange={handleChange} required >
                    <option value={Availability.Immediately}>Immediately</option>
                    <option value={Availability.Within24hours}>Within 24 hours</option>
                    <option value={Availability.WithinAWeek}>Within a week</option>
                  </select>
                </div>

                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>Description (Let us know the type of food you are donating) </label>
                  <textarea className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' value={state.description} name="description" onChange={handleChange} required></textarea>
                </div>

                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>Quantity</label>
                  <input className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' type="text" name="quantity" value={state.quantity} onChange={handleChange} required></input>
                </div>


                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>Location where this food is available for pickup</label>
                  <input className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' type="text" name="location" value={state.location} onChange={handleChange} required></input>
                </div>
                <PhotoUpload formData={state} setFormData={setState}/>
              
              <button className='bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' type="submit">Create Food</button>
            </form>
          </div>
        <p className="error-message">&nbsp;{state.error}</p>
      </div>
    )
}