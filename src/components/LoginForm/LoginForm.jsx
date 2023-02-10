import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'

export default function LoginForm({ setUser, setShowSignUp }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='parent'>
      <div className="child form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className='mb-5'>
              <label className="font-regular mb-1 text-gray-700 block">Email</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="email" name="email" value={credentials.email} onChange={handleChange} required />
            </div>
            <div className='mb-5'>
              <label className="font-regular mb-1 text-gray-700 block">Password</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="password" value={credentials.password} onChange={handleChange} required/>
            </div>

          <button className='btmBtn bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' type="submit">LOG IN</button>
        </form>
        <button className='btmBtn bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={() => setShowSignUp(false)}>Back to Sign Up</button>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}