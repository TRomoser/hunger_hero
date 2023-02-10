import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import BusinessForm from '../BusinessForm/BusinessForm';
import PhotoUpload from '../PhotoUpload/PhotoUpload';
import './SignUpForm.css';

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
    phoneNumber: '',
    error: ''
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    });
    console.log("this is the form data: ", formData)
  };

  const handleNext = () => {
    setShowBusinessForm(true)
  }

  const handleSubmit = async (evt) => {
    console.log(formData, "THIS IS THE STATE")
    evt.preventDefault();
    try {
      const {name, email, password, userType, photoUrl, address, state, zipCode, city, phoneNumber, businessName, businessType} = formData;
      const data = {name, email, password, userType, photoUrl, address, state, zipCode, city, phoneNumber, businessName, businessType} ;
      const user = await signUp(data);
      setUser(user)
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div className='justify-center align-center'>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
      { showBusinessForm === false ? 
        <div>
          <div className='w-1/3'>
            <div className='mb-5'>
              <label className="font-regular mb-1 text-gray-700 block">Name</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className='mb-5'>
              <label className="font-regular mb-1 text-gray-700 block">Email</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='mb-5'>
              <label className="font-regular mb-1 text-gray-700 block">Type</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="text" name="type" value={formData.businessType} onChange={handleChange} required/>
            </div>
            <div className='mb-5'>
              <label className="font-regular mb-1 text-gray-700 block">Password</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className='mb-5'>
              <label className="font-regular mb-1 text-gray-700 block">Confirm</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
            </div>
            <div className="selectDiv mb-5">
              <select className="heroOrHungry" type="userType" name="userType" onChange={handleChange} required>
                <option value={UserTypes.Hungry}>Hungry</option>
                <option value={UserTypes.Hero}>Hero</option>
              </select>
            </div>
          </div>
          <div>
            <PhotoUpload formData={formData} setFormData={setFormData}/>
          </div>
          <button onClick={handleNext} disabled={disable}>Next</button>
        </div>
        : 
        <BusinessForm setUser={setUser} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} setFormData={setFormData}/>
        }
      </form>
    </div>
      <p className="error-message">&nbsp;{formData.error}</p>
  </div>
  );
};
