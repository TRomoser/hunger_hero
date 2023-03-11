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
      setError('Invalid User Name or Password');
    }
  }

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto"src="./images/logo.png" alt="Hunger-Hero" />
          <h2 className="mt-6 text-center text-lg font-bold tracking-tight text-gray-900">Good to See You Again</h2>
        </div>
        <form className="mt-8 space-y-6" autoComplete="off" onSubmit={handleSubmit}>
          <div className='-space-y-px- rounded-md shadow-sm'>
            <div>
              {/* <label className="font-regular mb-1 text-gray-700 block" htmlFor='email'>Email</label> */}
              <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4"  type="email" name="email" value={credentials.email} placeholder='Email' onChange={handleChange} />
            </div>
          </div>
          <div>
            <div className='mb-5'>
              {/* <label className="font-regular mb-1 text-gray-700 block" htmlFor='password'>Password</label> */}
              <input className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4"  type="password" name="password" value={credentials.password} placeholder='Password' onChange={handleChange}/>
            </div>
          </div>
          <div className='flex justify-between text-sm'>
            <div className='font-medium text-grey-600 underline mb-4' onClick={() => setShowSignUp(false)}>Don't have an account?</div>
            <div className='font-medium text-grey-600 underline mb-4' disabled>Forgot Password?</div>
          </div>

          <button className='group relative flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2' type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>



    // <div className='parent'>
    //   <div className="child form-container">
    //     <form autoComplete="off" onSubmit={handleSubmit}>
    //       <div className='mb-5'>
    //           <label className="font-regular mb-1 text-gray-700 block">Email</label>
    //           <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="email" name="email" value={credentials.email} onChange={handleChange} required />
    //         </div>
    //         <div className='mb-5'>
    //           <label className="font-regular mb-1 text-gray-700 block">Password</label>
    //           <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="password" value={credentials.password} onChange={handleChange} required/>
    //         </div>

    //       <button className='btmBtn bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' type="submit">LOG IN</button>
    //     </form>
    //     <div>
    //       <button className='underline' onClick={() => setShowSignUp(false)}>Don't have an account?</button>
    //       <button className='underline'>Forgot Password?</button>
    //     </div>
    //   </div>
    //   <p className="error-message">&nbsp;{error}</p>
    // </div>
  );
}