import { updateUser } from '../../utilities/users-api'
import PhotoUpload from '../PhotoUpload/PhotoUpload';

export default function BusinessForm(props) {
    const { setUser, handleChange, handleSubmit, formData } = props 

  
    // handleSubmit = async (evt) => {
    //   evt.preventDefault();
    //   try {
    //     const {photoUrl, address, city, state, zipCode} = formState;
    //     const formData = {photoUrl, address, city, state, zipCode};
    //     // The promise returned by the signUp service
    //     // method will resolve to the user object included
    //     // in the payload of the JSON Web Token (JWT)
    //     const user = await updateUser(formData);
    //     props.setUser(user);
    //   } catch {
    //     // An error occurred
    //     // Probably due to a duplicate email
    //     setFormState({ error: 'Sign Up Failed - Try Again' });
    //   }
    // };
    //   const disable = formState.password !== formState.confirm;
      return (
        <>
            <label>Business Name</label>
            <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
            <label>Type of Business</label>
            <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} required />
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            <label>Zip</label>
            <input type="text" name="zipCode" value={formData.zip} onChange={handleChange} required />
            <label>Phone #</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            <PhotoUpload />
            <button type="submit">SIGN UP</button>
        </>
      );
    }