import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
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
    <div className='justify-center align-center'>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className='w-1/3'>
            <div className='mb-5'>
              <label className="font-bold mb-1 text-gray-700 block">Email</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="email" value={credentials.email} onChange={handleChange} required />
            </div>
            <div className='mb-5'>
              <label className="font-bold mb-1 text-gray-700 block">Password</label>
              <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="password" name="password" value={credentials.password} onChange={handleChange} required />
            </div>
              <button type="submit">LOG IN</button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}