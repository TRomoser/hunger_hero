import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import BusinessForm from '../BusinessForm/BusinessForm';
import PhotoUpload from '../PhotoUpload/PhotoUpload';
import './SignUpForm.css';

const UserTypes = {
  Hungry: "Hungry",
  Hero: "Hero"
}

export default function SignUpForm({ setUser, showSignUp, setShowSignUp }){
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
    <div className='parent'>
      <div className="child">
        <div className='formCont'>
          <form autoComplete="off" onSubmit={handleSubmit}>
                { showBusinessForm === false ?
          <div className='w-5/5'>
            <div>
              <div className='mb-5'>
                <label className="font-regular mb-1 text-gray-700 block">Name</label>
                <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className='mb-5'>
                <label className="font-regular mb-1 text-gray-700 block">Email</label>
                <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="email" name="email" value={formData.email} onChange={handleChange} required />
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
                <label className="font-regular mb-1 text-gray-700 block p-2">Type</label>
                <select className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium heroOrHungry" type="userType" name="userType" onChange={handleChange} required>
                  <option>Select either Hungry or Hero</option>
                  <option value={UserTypes.Hungry}>Hungry</option>
                  <option value={UserTypes.Hero}>Hero</option>
                </select>
              </div>
            </div>
            <div>
              <PhotoUpload formData={formData} setFormData={setFormData}/>
            </div>
            <button className='bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={handleNext} disabled={disable}>Next</button>
          </div>
          :
          <BusinessForm setUser={setUser} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} setFormData={setFormData}/>
          }
          </form>
        </div>
      <div className='btnCont'><button className='btmBtn bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={() => setShowSignUp(true)}>Already Have an Account?</button></div>
    </div>
      <p className="error-message">&nbsp;{formData.error}</p>
  </div>
  );
};
