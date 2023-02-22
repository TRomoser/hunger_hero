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
      {/* <p className="error-message">&nbsp;{error}</p> */}
      <div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
</div>
      
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