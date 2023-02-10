import { useState } from 'react';
import { createFood } from '../../utilities/food-api'

const FoodTypes = {
    CannedFood: "Canned Food",
    Produce: "Produce",
    ShelfStable: "Shelf Stable",
    PreparedMeals: "Prepared Meals",
    Mixed: "Mixed"
  }
  
  const Availability = {
    Immediately: "Immediately",
    Within24hours: "Within 24 hours",
    WithinAWeek: "Within a week"
  }

export default function HeroForm() {

    const [state, setState] = useState({
        name: FoodTypes.CannedFood,
        quantity: '',
        description: '',
        availability: Availability.Immediately,
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
      console.log(this.state, "THIS IS THE STATE")
      evt.preventDefault();
      try {
        const {name, quantity, description, availability, location} = state;
        const formData = {name, quantity, description, availability, location};
        // The promise returned by the signUp service
        // method will resolve to the user object included
        // in the payload of the JSON Web Token (JWT)
        const food = await createFood(formData);
        // this.props.setFood(food);
      } catch {
        // An error occurred
        setState({ error: 'Food creation failed - Try Again' });
      }
    };

    
    return (
        <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>What kind of food do you want to donate?</label>
            <select name="name" value={state.name} onChange={handleChange} required >
                <option value={FoodTypes.CannedFood}>Canned Food</option>
                <option value={FoodTypes.Produce}>Produce</option>
                <option value={FoodTypes.PreparedMeals}>Prepared Meals</option>
                <option value={FoodTypes.ShelfStable}>Shelf Stable</option>
                <option value={FoodTypes.Mixed}>Mixed</option>
                </select>
            
            <label>When will this be available for pick up?</label>
            <select name="availability" value={state.availability} onChange={handleChange} required >
                <option value={Availability.Immediately}>Immediately</option>
                <option value={Availability.Within24hours}>Within 24 hours</option>
                <option value={Availability.WithinAWeek}>Within a week</option>
            </select>

            <label>Description (Let us know the type of food you are donating) </label>
            <textarea value={state.description} name="description" onChange={handleChange} required></textarea>

            <label>Quantity</label>
            <input type="text" name="quantity" value={state.quantity} onChange={handleChange} required></input>

            <label>Location where this food is available for pickup</label>
            <input type="text" name="location" value={state.location} onChange={handleChange} required></input>


            <button type="submit">Create Food</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{state.error}</p>
      </div>
    )
}