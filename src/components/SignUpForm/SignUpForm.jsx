import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import BusinessForm from '../BusinessForm/BusinessForm';

const UserTypes = {
  Hungry: "Hungry",
  Hero: "Hero"
}

export default function SignUpForm({ setUser }){
  const [showBusinessForm, setShowBusinessForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    userType: UserTypes.Hero,
    photoUrl: '',
    businessName: '',
    businessType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    error: ''
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  const handleNext = () => {
    setShowBusinessForm(true)
  }

  const handleSubmit = async (evt) => {
    console.log(formData, "THIS IS THE STATE")
    evt.preventDefault();
    try {
      const {name, email, password, userType, photoUrl, address, state, zipCode, city} = formData;
      const data = {name, email, password, userType, photoUrl, address, state, zipCode, city} ;
      const user = await signUp(data);
      setUser(user)
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
      { showBusinessForm === false ? 
        <>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Type</label>
          <select type="userType" name="userType" onChange={handleChange} required>
            <option value={UserTypes.Hungry}>Hungry</option>
            <option value={UserTypes.Hero}>Hero</option>
            </select>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button onClick={handleNext} disabled={disable}>Next</button>
        </>
        : 
        <BusinessForm setUser={setUser} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
        }
      </form>
    </div>
      <p className="error-message">&nbsp;{formData.error}</p>
  </div>
  );
};
